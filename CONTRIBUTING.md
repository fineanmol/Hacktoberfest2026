# 🤝 Contributing to Hacktoberfest 2025

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the Hacktoberfest 2025 project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Types of Contributions](#types-of-contributions)
- [How to Contribute](#how-to-contribute)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)

## 📖 Code of Conduct

Please be respectful and inclusive. We are committed to providing a welcoming and inspiring community for all. Harassment or discrimination of any kind will not be tolerated.

## 🚀 Getting Started

### Prerequisites

- Git installed on your machine
- A GitHub account
- Any modern code editor (VS Code, Sublime, etc.)
- Python 3.6+ or Node.js (for running local server)

### Fork and Clone

1. **Fork the repository**
   - Click the "Fork" button on the GitHub repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Hacktoberfest2025.git
   cd Hacktoberfest2025
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/fineanmol/Hacktoberfest2025.git
   ```

4. **Create a local branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Run Locally

```bash
# Using Python
python3 -m http.server 8000

# OR using Node.js
npx http-server
```

Visit `http://localhost:8000` in your browser.

## 📝 Types of Contributions

### 1. **Adding Yourself as a Contributor** ⭐ (Great for Hacktoberfest!)

Add your profile to the contributors list:

```javascript
{
  id: [next_id_number],
  fullname: "Your Full Name",
  username: "https://github.com/your-username",
}
```

### 2. **Code Solutions**

Add solutions to:
- **Python Pattern Challenges**: `PatternChalange(PYTHON)/`
- **LeetCode Problems**: `LeetcodeProblems/`
- **C/C++ Solutions**: `Cpp/`

### 3. **Bug Fixes**

Found a bug? Create an issue or submit a PR with:
- Clear description of the bug
- Steps to reproduce
- Your fix

### 4. **Feature Enhancements**

Suggestions:
- Dark mode improvements
- Search filters
- Performance optimizations
- Accessibility improvements
- Mobile responsiveness

### 5. **Documentation**

- Update README.md
- Add code comments
- Fix typos
- Improve clarity

## 🔧 How to Contribute

### Step 1: Create Your Feature Branch

```bash
git checkout -b feature/descriptive-feature-name
```

### Step 2: Make Your Changes

**For adding yourself:**
- Edit `contributors/contributorslist.js`
- Add your entry in alphabetical order (by last name or first name)
- Keep the format consistent

**For code solutions:**
- Add file to appropriate folder
- Include comments explaining logic
- Use clear variable names

**For UI improvements:**
- Test on multiple screen sizes
- Update CSS files in `css/` folder
- Test dark mode functionality

### Step 3: Commit Your Changes

```bash
git add .
git commit -m "Add: Your descriptive commit message"
```

See [Commit Message Guidelines](#commit-message-guidelines)

### Step 4: Push to Your Fork

```bash
git push origin feature/descriptive-feature-name
```

### Step 5: Create a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Provide a clear title and description
5. Click "Create Pull Request"

## 📋 Commit Message Guidelines

Follow this format:

```
<type>: <subject>

<body>

<footer>
```

### Type (required)

- **Add**: New feature or contributor
- **Fix**: Bug fix
- **Improve**: Enhancement or optimization
- **Docs**: Documentation changes
- **Style**: CSS or formatting changes
- **Refactor**: Code refactoring

### Subject (required)

- Use imperative mood ("Add feature" not "Added feature")
- Do not capitalize first letter (unless a name)
- No period at the end
- Max 50 characters

### Body (optional)

- Wrap at 72 characters
- Explain **what** and **why**, not **how**

### Examples

```bash
git commit -m "Add: John Doe as contributor"
git commit -m "Fix: Broken favicon link in index.html"
git commit -m "Improve: Mobile responsiveness on contributor cards"
git commit -m "Docs: Update README with local setup instructions"
```

## 🔄 Pull Request Process

1. **Update your branch** with latest changes:
   ```bash
   git fetch upstream
   git rebase upstream/master
   ```

2. **Resolve conflicts** if any

3. **Test locally** - Ensure everything works:
   - Run local server
   - Test on mobile/tablet sizes
   - Test dark mode toggle
   - Check console for errors

4. **Provide clear PR description**:
   - What does this PR do?
   - Why is it needed?
   - How can it be tested?
   - Closes #(issue number) if applicable

5. **One feature per PR** - Keep PRs focused and manageable

6. **Wait for review** - Maintainers will review and provide feedback

## 💻 Coding Standards

### JavaScript

```javascript
// Use descriptive variable names
const contributerName = "John Doe";
const isContributorActive = true;

// Use const by default, let if needed, avoid var
// Use arrow functions
const calculateSum = (a, b) => a + b;

// Add comments for complex logic
// Format: Clear, concise, helpful
```

### CSS

```css
/* Use semantic class names */
.contributor-card { }
.contributor-avatar { }

/* Follow BEM (Block, Element, Modifier) when possible */
.button { }
.button--primary { }
.button--primary:hover { }

/* Use variables for colors */
:root {
  --primary-color: #FC3E6A;
  --text-dark: #000;
}
```

### HTML

```html
<!-- Use semantic HTML tags -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>

<!-- Add alt text to images -->
<img src="avatar.jpg" alt="User avatar">

<!-- Use meaningful class names -->
<div class="contributor-container">...</div>
```

## 📱 Testing Checklist

Before submitting your PR:

- [ ] Code runs without errors
- [ ] No console warnings
- [ ] Tested on desktop
- [ ] Tested on mobile (< 576px)
- [ ] Tested on tablet (576-992px)
- [ ] Dark mode works correctly
- [ ] Search functionality works
- [ ] Links open correctly
- [ ] Avatars load properly
- [ ] Page loads at reasonable speed

## 🎯 Hacktoberfest Tips

- **Start small**: Your first PR can be as simple as adding yourself to the contributors list
- **Read issues**: Check if there are open issues you can help with
- **Ask questions**: Don't hesitate to ask in comments or discussions
- **Be patient**: Maintainers are volunteers, reviews may take time
- **Help others**: Review PRs from other contributors

## ❓ Need Help?

- **Questions?** Open a discussion on GitHub
- **Found a bug?** Open an issue with details
- **Want to suggest a feature?** Open an issue with your idea

## 🎉 What Happens Next?

After your PR is approved and merged:
- Your name will appear in the contributors list (for contributor PRs)
- You'll be part of the Hacktoberfest community
- Your contribution will be visible on the website

---

**Thank you for contributing! 🙌**

Your contributions make this project better for everyone. Whether it's code, documentation, or ideas, we appreciate your efforts to help grow the open-source community.

Happy Hacking! 🚀

*P.S. Don't forget to ⭐ the repo if you find it helpful!*
