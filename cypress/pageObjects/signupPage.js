class SignupPage {
    visit() {
      cy.visit('https://mailchimp.com');
    }
  
    clickSignupButton() {
      cy.get('a[data-title="Sign Up Free"]').click();
    }
  
    fillSignupForm(email, username, password) {
      cy.get('#email').type(email);
      cy.get('#new_username').type(username);
      cy.get('#new_password').type(password);
    }
  
    submitSignup() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default SignupPage;
  