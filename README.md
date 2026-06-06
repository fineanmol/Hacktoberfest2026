# Hacktoberfest 2025 — contributor wall

Static site that lists everyone who opened a PR here. No build step — just HTML, CSS, and a JavaScript file with names.

**Live site:** [fineanmol.github.io/Hacktoberfest2025](https://fineanmol.github.io/Hacktoberfest2025/)

**Want to contribute?** We merge most new work in [fineanmol/hacktoberfest](https://github.com/fineanmol/hacktoberfest). This repo is kept as the 2025 archive and contributor list.

---

## Add your name

1. Fork this repo.
2. Clone your fork and create a branch.
3. Open `contributors/contributorsList.js` and add an entry at the **bottom** of the array:

```javascript
{
  id: 374,
  fullname: "Your Name",
  username: "https://github.com/yourusername",
},
```

Use the next free `id` number. Keep the GitHub URL exactly like the example (`https://github.com/...`).

4. Commit, push, and open a pull request.

Keep PRs small — one name per PR is easiest to review.

---

## Sync your fork (avoid merge conflicts)

```bash
git remote add upstream https://github.com/fineanmol/Hacktoberfest2025.git
git fetch upstream
git merge upstream/master
```

---

## Project layout

| Path | Purpose |
|------|---------|
| `index.html` | Main page |
| `contributors/contributorsList.js` | Contributor data |
| `css/` | Styles |
| `.github/workflows/` | Deploy to GitHub Pages, PR checks |

---

## License

See [LICENSE](LICENSE). Maintained by [Anmol Agarwal](https://github.com/fineanmol).
