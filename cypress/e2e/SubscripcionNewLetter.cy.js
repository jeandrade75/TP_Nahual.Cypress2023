/// <reference types="cypress" />


describe('Newletter subscripcion', () => {
    it('Validar URL', () => {
        cy.visit('https://www.invidcomputers.com/')
        cy.get('[data-target="#newsModal"] > .hidden-xs').click()
        cy.get('[class="_dp_input--text _dp_input--full"]').click()
        //cy.get('#doppler_subscription').eq(1).click()
        //cy.contains('nombre@ejemplo.com').trigger('mouseover').click()
        //cy.contains('nombre@ejemplo.com').click()
        cy.get('._dp_input--text _dp_input--full').eq(1).click()
        //cy.contains('CONTACTO').trigger('mouseover').click()
        //cy.contains('CONTACTO').click()
        //cy.get('._dp_input--text _dp_input--full').type('test@gmail.com')
        //cy.get('[name="_dp_email"]').type('test@gmail.com')  

   })
})