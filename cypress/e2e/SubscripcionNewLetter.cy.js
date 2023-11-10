/// <reference types="cypress" />


describe('Newletter subscripcion', () => {
    it('Validar URL', () => {
        cy.visit('https://www.invidcomputers.com/')
        cy.get('[data-target="#newsModal"] > .hidden-xs').click()
        //cy.get('._dp_input--text._dp_input--full').type('test@gmail.com') //atributos
        //cy.get('[name="_dp_email"]').click().type('test@gmail.com') //atributos
        cy.get('[placeholder="nombre@ejemplo.com"]').click().type('test@gmail.com') //atributos
          
   })
})