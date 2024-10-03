describe('Registro de usuario y validación de enlace de activación', () => {
    it('Debería registrarse y verificar el enlace de activación en el correo', () => {
      cy.visit('https://mailchimp.com');
      
      // Realiza el registro
      cy.get('#signup-email').type('usuario@example.com');
      cy.get('#signup-button').click();
      
      // Espera un momento para que el correo sea enviado (ajusta según sea necesario)
      cy.wait(5000); // Espera 5 segundos, ajusta según el tiempo que tarda en enviar el correo
      
      // Verifica el correo en Mailtrap
      cy.mailtrap().getLastEmail('usuario@example.com').then((email) => {
        expect(email.subject).to.include('Activación de cuenta'); // Ajusta según el asunto de tu correo
        const activationLink = email.html.match(/href="([^"]+)"/)[1]; // Obtiene el enlace de activación
        cy.visit(activationLink); // Visita el enlace de activación
        
        // Verifica que se haya activado la cuenta (ajusta según tu aplicación)
        cy.url().should('include', '/activation-success');
      });
    });
  });
  