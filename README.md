# Playwright Basics with TypeScript

This repository contains beginner-friendly automation examples built using Playwright and TypeScript.

It is designed to help learn and practice the core concepts of browser automation while building a strong foundation for advanced Playwright framework development.

## Topics Covered

- Playwright setup and configuration
- Browser launch and navigation
- Locators
- Assertions
- Input fields handling
- Dropdown handling
- Checkbox and radio button interaction
- Alerts and popups
- Frames and iframes
- Multiple browser tabs/windows
- Waiting strategies
- Basic test organization
- Debugging basics

## Tech Stack

- Playwright
- TypeScript
- Node.js

## Project Structure

```bash
tests/
 ├── locators.spec.ts
 ├── assertions.spec.ts
 ├── forms.spec.ts
 ├── dropdown.spec.ts
 ├── alerts.spec.ts
 ├── frames.spec.ts
 └── windows.spec.ts
```

## Installation

Clone the repository:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run headed mode:

```bash
npx playwright test --headed
```

Run specific test:

```bash
npx playwright test tests/locators.spec.ts
```

## Learning Goal

The goal of this project is to build a strong Playwright foundation before moving to advanced concepts such as:

- Page Object Model
- Fixtures
- Data-driven testing
- API testing
- CI/CD integration
- Reporting
- Self-healing locators

## Progress

This repository will be updated regularly as new Playwright concepts are learned and implemented.

## Completed Topics
- [x] Playwright setup
- [x] First test
- [x] Locators
