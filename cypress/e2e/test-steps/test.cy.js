import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignupPage from '../pageObjects/signupPage';
import LoginPage from '../pageObjects/loginPage';
import { sendMail } from '../utils/mailer';
import axios from 'axios';

const signupPage = new SignupPage();
const loginPage = new LoginPage();

describe('Mailchimp Signup and Activation', () => {
  
    it('should navigate to the Mailchimp website', () => {
      signupPage.visit();
    });
  
    it('should fill in the signup form with valid details', () => {
      signupPage.fillForm('test@example.com', 'testuser', 'Password123!');
    });
  
    it('should submit the form', () => {
      signupPage.submitForm();
    });

  // Simulating activation email
  it('should receive an activation email', () => {
    const email = 'test@example.com'; // The email to check for activation
    const subject = 'Account Activation';

    const html = `
      <p>Hello,</p>
      <p>Please activate your account by clicking the following link:</p>
      <a href="http://your-activation-link.com">Activate account</a>
      <p>Thank you,</p>
      <p>The Mailchimp team</p>
    `;

    // Send the activation email
    return sendMail(email, subject, html)
      .then(info => {
        console.log('Activation email sent:', info);
      })
      .catch(error => {
        console.error('Error sending activation email:', error);
      });
  });

  it('should activate my account', () => {
 
    const inboxId = process.env.MAILTRAP_INBOX_ID; 
    const apiToken = process.env.MAILTRAP_API_TOKEN;
  
    return axios.get(`https://mailtrap.io/api/v1/inboxes/${inboxId}/messages`, {
      headers: {
        'Api-Token': apiToken
      }
    }).then(response => {
      // Check the response and find the activation email
      const activationEmail = response.data.find(email => email.subject === 'Account Activation');
      if (activationEmail) {
        // Extract the activation link from the email body
        const activationLink = extractActivationLink(activationEmail.html);
        // Navigate to the activation link
        cy.visit(activationLink);
      } else {
        throw new Error('Activation email not found');
      }
    }).catch(error => {
      console.error('Error retrieving emails:', error);
    });
  });
  
  function extractActivationLink(emailBody) {
    // Logic to extract the activation link from the email HTML
    const regex = /href="([^"]*)"/; // Regex to find the href in the email body
    const match = regex.exec(emailBody);
    return match ? match[1] : null;
  }

  it('should log in with my new credentials', () => {
    loginPage.login('test@example.com', 'Password123!');
  });

  it('should be logged in successfully', () => {
    cy.url().should('include', '/dashboard');
  });
});