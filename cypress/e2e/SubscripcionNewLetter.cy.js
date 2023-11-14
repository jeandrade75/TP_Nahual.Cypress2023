/// <reference types="cypress" />


describe('Newletter subscripcion', () => {
    it('Validar URL', () => {
        cy.visit('https://www.invidcomputers.com/')
        cy.get('[data-target="#newsModal"] > .hidden-xs').click()
        cy.get('._dp_input--text _dp_input--full').type('test@gmail.com')
        //cy.get('[name="_dp_email"]').type('test@gmail.com')  
   })
})