const ALLOWED_BOT_LOGINS = new Set([
  'app/imgbot',
  'imgbot[bot]',
  'dependabot[bot]',
  'dependabot-preview[bot]',
  'renovate[bot]',
]);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isAllowedBot(user) {
  if (!user) {
    return false;
  }
  if (user.login === 'github-actions[bot]') {
    return false;
  }
  if (ALLOWED_BOT_LOGINS.has(user.login)) {
    return true;
  }
  return user.type === 'Bot';
}

function getPullRequestsFromContext(context) {
  if (context.payload.pull_request) {
    return [context.payload.pull_request];
  }

  if (context.payload.check_suite?.pull_requests?.length) {
    return context.payload.check_suite.pull_requests;
  }

  return [];
}

async function validateCheckPassed(github, owner, repo, sha, core) {
  const { data } = await github.rest.checks.listForRef({
    owner,
    repo,
    ref: sha,
  });

  const validate = data.check_runs.find((run) => run.name === 'validate');
  if (!validate) {
    core.info('No validate check run found yet');
    return false;
  }

  if (validate.status !== 'completed') {
    core.info(`validate check status=${validate.status}`);
    return false;
  }

  return validate.conclusion === 'success';
}

async function getMergeablePull(github, owner, repo, pullNumber, core) {
  for (let attempt = 0; attempt < 6; attempt += 1) {
    const { data } = await github.rest.pulls.get({
      owner,
      repo,
      pull_number: pullNumber,
    });

    if (data.mergeable !== null) {
      return data;
    }

    core.info(`PR #${pullNumber} mergeable is null — waiting (attempt ${attempt + 1}/6)`);
    await sleep(5000);
  }

  return (
    await github.rest.pulls.get({
      owner,
      repo,
      pull_number: pullNumber,
    })
  ).data;
}

module.exports = async ({ github, context, core }) => {
  const { owner, repo } = context.repo;
  const pullRequests = getPullRequestsFromContext(context);

  if (pullRequests.length === 0) {
    core.info('No pull requests to process for this event');
    return;
  }

  for (const pr of pullRequests) {
    const pullNumber = pr.number;
    const fresh = await getMergeablePull(github, owner, repo, pullNumber, core);

    if (fresh.state !== 'open') {
      core.info(`PR #${pullNumber} is ${fresh.state} — skip`);
      continue;
    }

    if (fresh.merged) {
      core.info(`PR #${pullNumber} already merged — skip`);
      continue;
    }

    if (!isAllowedBot(fresh.user)) {
      core.info(
        `PR #${pullNumber} author @${fresh.user.login} is not an allowed bot — skip`
      );
      continue;
    }

    if (fresh.mergeable !== true) {
      core.info(
        `PR #${pullNumber} not mergeable (mergeable=${fresh.mergeable}, state=${fresh.mergeable_state}) — skip`
      );
      continue;
    }

    const validateOk = await validateCheckPassed(
      github,
      owner,
      repo,
      fresh.head.sha,
      core
    );
    if (!validateOk) {
      core.info(`PR #${pullNumber} validate check not green — skip`);
      continue;
    }

    core.info(`Merging bot PR #${pullNumber} from @${fresh.user.login}`);
    await github.rest.pulls.merge({
      owner,
      repo,
      pull_number: pullNumber,
      merge_method: 'squash',
    });
    core.info(`Merged PR #${pullNumber}`);
  }
};
