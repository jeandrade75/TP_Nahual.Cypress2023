/// <reference types="cypress" />

describe('Validar url y popup', () => {
    it('Validar URL', () => {
        cy.visit('https://www.invidcomputers.com/')
        cy.get('#nav > :nth-child(4) > a').click()
        cy.get('.nov_dlarga > :nth-child(4) > .le').click()


    })
})
