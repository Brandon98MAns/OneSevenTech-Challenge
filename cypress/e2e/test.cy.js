import SignupPage from '../pageObjects/signupPage';
import LoginPage from '../pageObjects/loginPage';

describe('Mailchimp Signup and Activation Flow', () => {
  const signupPage = new SignupPage();
  const loginPage = new LoginPage();

  it('should sign up a new user', () => {
    signupPage.visit();
    signupPage.clickSignupButton();
    
    
    const email = 'testuser@example.com'; 
    const username = 'testuser123';
    const password = 'StrongPassword123!';

    signupPage.fillSignupForm(email, username, password);
    signupPage.submitSignup();

  });

  it('should login after activation', () => {
    loginPage.visit();
    loginPage.login('testuser@example.com', 'StrongPassword123!');

    // Verifica que el inicio de sesión fue exitoso
    cy.url().should('include', '/dashboard');
  });
});
