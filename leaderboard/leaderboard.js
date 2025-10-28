const leaderboard = document.getElementById("leaderboard");

async function fetchContributors() {
  const repoOwner = "fineanmol"; // change if you fork
  const repoName = "Hacktoberfest2025";

  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoOwner}/${repoName}/contributors?per_page=100`
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const contributors = await response.json();
    displayContributors(contributors);
  } catch (error) {
    leaderboard.innerHTML = `<p style="color:red;">Error fetching data: ${error.message}</p>`;
  }
}

function displayContributors(contributors) {
  leaderboard.innerHTML = "";

  contributors.sort((a, b) => b.contributions - a.contributions);

  contributors.forEach((user) => {
    const card = document.createElement("div");
    card.className = "contributor";
    card.innerHTML = `
      <a href="${user.html_url}" target="_blank">
        <img src="${user.avatar_url}" alt="${user.login}" class="avatar" />
      </a>
      <a href="${user.html_url}" target="_blank" class="username">@${user.login}</a>
      <p class="contributions">Commits: ${user.contributions}</p>
    `;
    leaderboard.appendChild(card);
  });
}

fetchContributors();
