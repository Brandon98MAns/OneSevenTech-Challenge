class LoginPage {
    visit() {
      cy.visit('https://login.mailchimp.com/');
    }
  
    login(email, password) {
      cy.get('#username').type(email);
      cy.get('#password').type(password);
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default LoginPage;
  