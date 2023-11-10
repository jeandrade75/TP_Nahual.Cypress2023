/// <reference types="cypress" />

describe('Validar Categoria > Monitores > Corporativos', () => {
    it('Validar URL', () => {
        cy.visit('https://www.invidcomputers.com/')
        cy.get('#top-buscar > #palabra').click().type('Monitores')
        cy.get('#top-buscar > .input-group-btn > .btn > .fa').click()
        cy.get('.nav > :nth-child(19) > #sup-prod-20').click()
        cy.get('#sup-prod-115').click()
        cy.get('h1 > [href="monitor-corporativo-monitores--prod--115"]').should('have.text', 'Monitor Corporativo')

    })
})
