/// <reference types="cypress" />

describe('Buscando un producto', () => {

    beforeEach(() => {
    cy.visit('https://www.invidcomputers.com/')
    });

    it('Buscar producto y filtrar por Menor precio', () => {
        //cy.visit('https://www.invidcomputers.com/')
        cy.get('#top-buscar > #palabra').click().type('Auricular')
        cy.get('#top-buscar > .input-group-btn > .btn > .fa').click()
        cy.get('#ordenamientoListado').select('Menor precio')
        //Se ordenan los resultados por Menor precio
        cy.contains('Se encontraron 33 ordenados por').click()
        //Se valida cantidad de productos encontrados en la busqueda
        cy.get('.list-view > .fa').click()
        //Se ordena la busqueda por lista

    });
    });

