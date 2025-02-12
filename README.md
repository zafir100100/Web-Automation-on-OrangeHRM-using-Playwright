# Web-Automation-on-OrangeHRM-using-Playwright

## Video Output:

https://github.com/user-attachments/assets/59cd73e4-d61c-4ea8-a96b-ef15fb9a3b85

## What is Automation?

Automation is the process of using software tools and scripts to perform tasks that would typically be done manually by a human. In the context of software testing, automation involves using tools to execute test cases and compare the actual results with the expected results automatically.

## Why use Playwright?

Playwright is a modern web automation framework that offers several advantages for testing web applications:

- **Cross-browser support**: Playwright supports testing on multiple browsers (Chromium, Firefox, and WebKit) with a single API.
- **Headless and non-headless modes**: You can run tests with or without a browser UI, making it versatile for different environments.
- **Reliable automation**: It automatically waits for elements to be actionable, reducing the chances of flaky tests.
- **Fast execution**: Playwright runs the tests in parallel, speeding up the execution process.
- **Rich API**: Playwright provides an extensive API to handle different interactions like keyboard input, mouse events, and form submissions.
- **Network Interception**: Playwright allows you to intercept and modify network requests, providing control over API responses.

Playwright is an excellent choice for web automation due to its cross-browser capabilities, reliability, and performance.

## Technology used
- Playwright
- Visual Studio Code
- JavaScript

## How to run this project

- Clone this project
- First, install dependencies:
  ```
  npm install
  ```
- Then, run the test:
  ```
  npx playwright test
  ```

## Scenario:

- Open the browser.
- Navigate to the URL: https://opensource-demo.orangehrmlive.com
- Verify the login page loads successfully.
- Enter the username: Admin
- Enter the password: admin123
- Click the login button.
- Verify the dashboard is displayed after login.
- Click on the "Leave" menu from the navigation bar.
- Verify the "Apply Leave" page loads successfully.
- Click on the "Leave Type" dropdown.
- Select "CAN - Personal" from the dropdown.
- Click on the start date picker.
- Select the start date as 27 from the calendar.
- Click on the end date picker.
- Select the end date as 28 from the calendar.
- Select "All Days" from the "Duration" dropdown.
- Click on the "Half Day - Morning" option from the "Duration" dropdown.
- Click on the text area and fill in the comment "test comment".
- Click on the "Apply" button.
- Verify the leave request is successfully applied.

## Playwright Report Screenshot:

![image]()
