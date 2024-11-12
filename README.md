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

###Test Case Details
Test Case 1 - Positive scenario to find the average forex rate for CAD to AUD for the recent weeks
Test Case 2 - Negative scenario to validate the error message in case of incorrect series
Test Case 3 - Negative scenario to validate the error message in case of incorrect date format
Test Case 4 - Negative scenario to validate the error message in case of end date less than start date
Test Case 5 - Positive scenario to find the average forex rate for AUD to CAD for the recent weeks
Test Case 6 - Positive scenario to find the average forex rate for USD to CAD for the recent weeks
