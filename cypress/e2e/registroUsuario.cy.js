/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
return false
})

it('fails to visit website 1', function () {
  cy.visit('https://www.invidcomputers.com')
})

describe('Primer login', () => {

      beforeEach(() => {
        cy.visit('https://www.invidcomputers.com/')
      
      }); 


        it('Registrar nuevo usuario', () =>{
        //cy.visit('https://www.invidcomputers.com/')
        cy.get('#login_sup > .registronuevo').click()
        cy.get('#recetaForm > :nth-child(3) > .form-control').click().type(' Tester Automatizado2')
        cy.get('#recetaForm > :nth-child(4) > .form-control').click().type('Empresa Testing')
        cy.get('#domicilio').click().type('Tandil')
        cy.get('#localidad').click().type('Tandil')
        cy.get('#cod_postal').click().type('7000')
        cy.get('#provincia').select("Buenos Aires")
        cy.get('#horario_entrega').click().type('Todo el dia')
        cy.get('#clonarDestino').check()
        // cy.get('#entrega_domicilio0')
        // cy.get('#entrega_localidad0')
        // cy.get('#entrega_cod_postal0')
        cy.get('#posicion_fiscal').select('Monotributista')
        cy.get(':nth-child(17) > .form-control').click().type('204125896')
        cy.get(':nth-child(18) > .form-control').click().type('1141025896')
        cy.get(':nth-child(19) > .form-control').click().type('test@gmail.com')
        //cy.get('#file_anexo2').selectFile('cypress/images/UNO.png',{force:true})
        cy.get('#file_cuit').selectFile('cypress/e2e/images/DOS.png')
        cy.get('#file_iibb').selectFile('cypress/e2e/images/TRES.png', {force: true})
        cy.get('#file_anexo2 ').selectFile('cypress/e2e/images/UNO.png', {force: true})
        cy.get('[value="N"]').click()
        cy.get('#perfil').select('Otro')
        //cy.get('#EnviarReceta').click()
        //cy.get('*[data-cy^="introCard"]')
        cy.get('#credito').check()
        cy.get('#termYCond').check()
        // cy.get('*[class^="recaptcha-checkbox-checkmark"]').check({force: true})
        // //cy.get("[value='Male']").check({force: true});
        // cy.get('#EnviarReceta').click()

});
});
       


 