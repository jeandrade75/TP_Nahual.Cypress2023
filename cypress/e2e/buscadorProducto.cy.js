/// <reference types="cypress" />

describe('Buscar producto y filtrar por Marca y ordenar por lista', () => {
    it('Validar URL', () => {
        cy.visit('https://www.invidcomputers.com/')
        cy.get('#top-buscar > #palabra').click().type('Auricular')
        cy.get('#top-buscar > .input-group-btn > .btn > .fa').click()
        cy.get('#MARCA_OPCION_114').click()
        //cy.get('.productFilter > .pull-left').should('have.text', 'Se encontraron')
        cy.contains('Se encontraron 6 ordenados por').click()
        cy.get('.list-view > .fa').click()


    })
})
