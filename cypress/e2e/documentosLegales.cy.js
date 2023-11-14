/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Seccion : LEGAL', () => {
    
    it('Validar descarga de documentos legales', () => {
        
        
        cy.visit('https://www.invidcomputers.com/')
        cy.get('.row > :nth-child(2) > .list-unstyled > :nth-child(2) > a').click()
        cy.get('.col-md-12 > h1').should('have.text', 'Documentos')
        cy.get('.lkdesc').click()

        
    })
})
