## Tooling Info:

Node Version - 20.18.0
Playwright Version - 1.48

## Introduction to framework
The framework uses default playwright test runner and configurations. All the tests are present under src/tests/. The helper class contains a base api perform API operations. Test data is present under src/fictures in form of a JSON file. All the test data can be configured as required corresponding to the respective test case. Base URL and HTML reporter are configured in playwright.config.ts.

### Execution Steps
1. Clone the repo and switch to branch 'main'
2. Install all the required dependencies using 'npm install' and 'npx playwright install'
3. Open terminal and execute 'npx playwright test'
5. After execution, HTML report will be generated in reports folder.
