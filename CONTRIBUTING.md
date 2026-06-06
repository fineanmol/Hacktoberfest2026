# Contributing

Thanks for stopping by. This repo is a simple static site — no npm install, no build.

## What to change

Add yourself to `contributors/contributorsList.js`:

```javascript
{
  id: 374,
  fullname: "Your Name",
  username: "https://github.com/yourusername",
},
```

- Put new entries at the **end** of the list.
- Use the next unused `id`.
- The GitHub link must start with `https://github.com/` (double slash after `https:`).

## Steps

```bash
git clone https://github.com/fineanmol/Hacktoberfest2025.git
cd Hacktoberfest2025
git checkout -b add-my-name
# edit contributors/contributorsList.js
git add contributors/contributorsList.js
git commit -m "Add Your Name to contributors list"
git push origin add-my-name
```

Then open a pull request on GitHub.

## Rules (loose on purpose)

- Don't delete other people's entries.
- One contributor per PR when you can — smaller PRs merge faster.
- Styling tweaks are fine if the page still loads.

## Conflicts

If your fork is behind:

```bash
git remote add upstream https://github.com/fineanmol/Hacktoberfest2025.git
git fetch upstream
git merge upstream/master
```

Fix any conflicts in `contributorsList.js`, then push again.
