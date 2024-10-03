Feature: Mailchimp User Signup and Login

  Scenario: Sign up a new user and activate the account
    Given I navigate to the Mailchimp website
    When I fill in the signup form with valid details
    And I submit the form
    Then I should receive an activation email
    When I activate my account
    And I log in with my new credentials
    Then I should be logged in successfully