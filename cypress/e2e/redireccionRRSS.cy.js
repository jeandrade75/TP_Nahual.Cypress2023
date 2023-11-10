/// <reference types="cypress" />

describe('Validar redireccion a Rrss', () => {
    it('Validar URL', () => {
        cy.visit('https://www.invidcomputers.com/')
        //cy.get('.social-share > :nth-child(2) > a').click()//facebook
        cy.get('.social-share > :nth-child(5) > a').click()
        //cy.get(':nth-child(4) > a > .fa').click()//youtube
        //cy.get(':nth-child(3) > a > .fa').click()//instagram


    })
})