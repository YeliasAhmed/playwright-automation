# Playwright + Cucumber Demo Project

This project demonstrates setting up a Playwright automation framework with Cucumber using the Page Object Model (POM) structure.

---

## 1. Project Setup

### Initialize a new Node.js project

```bash
mkdir playwright-automation
cd playwright-automation
npm init -y
```

### Install dependencies

```bash
npm install
```
```bash
npm install @playwright/test @cucumber/cucumber playwright
```

### Install Playwright Browsers
```bash
npx playwright install
```

### Install Dotenv
```bash
npm install dotenv
```

### 🚀 Running Tests
```bash
npm test
```


### 1️⃣ Clone Repository

```bash
cd PLAYWRIGHT-AUTOMATION
git clone https://github.com/YeliasAhmed/playwright-automation.git
```

### Create Project Structure

```bash

PLAYWRIGHT-AUTOMATION/

├──features
│    ├── step_definitions
│           ├── loginSteps.js
│    ├── login.feature
│
├── pageobjects
│    ├── loginPage.js
|
├── support
│ ├── hooks.js
│ ├── POMManager.js
│ └── world.js
├── .env
├── .gitignore
├── cucumber.js
├── package.json
├── package-lock.json
└── README.md
```

### 📌 Explanation of Key Folders

- **`features/`** → Holds `.feature` `step_definitions` files written in Gherkin syntax and step definitions.  
- **`pageobjects/`** → Contains Page Object Model classes for reusable UI actions.  
- **`support/`** → `hooks.js` Houses Cucumber hooks, `world.js` world configuration, and `POMManager.js` POM manager.  
- **`.env`** → Stores environment variables.  
- **`.gitignore`** → Specifies files/folders to ignore in Git.  
- **`cucumber.js`** → Cucumber configuration file.  
- **`package.json`** → Project metadata and dependencies.  
- **`package-lock.json`** → Lock file to ensure consistent installs.  
- **`README.md`** → Project documentation.  

