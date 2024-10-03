# OneSevenTech-Challenge

QA Automation Project

Overview
This project demonstrates a complete automation testing framework for the Mailchimp signup process using Cypress. The framework follows the Behavior-Driven Development (BDD) approach, implementing the Page Object Model (POM) for better organization and maintainability of the test code.

Tools and Technologies Used

Cypress:
Used for automating the signup process on Mailchimp.
Cucumber:
Used in conjunction with Cypress for BDD-style tests.
Nodemailer:
Used to send activation emails to users after signup.
Mailtrap:
A service for testing and debugging email sending in applications.
Used to capture the activation email sent to users without sending it to real inboxes.
Axios:
A promise-based HTTP client for the browser and Node.js.
Used to interact with the Mailtrap API to retrieve activation emails.
GitHub Actions:
Used to set up automated test execution on code commits.
Page Object Model (POM):
A design pattern that enhances test maintenance and reduces code duplication.
Used to create separate classes for different pages, improving readability and organization.

Features

Automated signup process for new users on Mailchimp.
Sends an activation email using Nodemailer.
Validates the receipt of the activation email using Mailtrap.
Extracts the activation link and simulates account activation.
Logs in with the activated account and verifies successful login.
Takes screenshots on errors during the test execution.
Configured to run tests across multiple browsers (Chrome, Firefox, Safari) in parallel.
Integrated reporting functionality.

Instructions for Running the Framework

1-Clone the Repository
2-Install Dependencies
3-Configure Mailtrap
4-Run Cypress Tests: npx cypress run
