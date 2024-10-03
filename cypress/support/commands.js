
//Capture and save a screenshot when encountering errors during test steps.
Cypress.on('fail', (error, runnable) => {
    cy.screenshot();
    throw error;
  });
  