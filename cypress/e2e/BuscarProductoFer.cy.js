/// <reference types="cypress" />

describe('Buscador de producto', () => {


    beforeEach(() => {

        cy.visit('https://www.invidcomputers.com/')

        // Buscar un producto
        cy.get('#top-buscar').type('auricular genius')
        cy.get('#top-buscar > .input-group-btn > .btn > .fa').click()
        // Seleccionar el producto deseado
        cy.get(':nth-child(1) > .product').click()


    })
    it('explorar categorias', () => {
        //Seleccionar la categoría
        cy.get('.nav > :nth-child(1) > #sup-prod-2').click()
        // Verificar que la página se cargue correctamente
        cy.get('#sup-prod-28').should('be.visible')

        //validar numero de items encontrados
        cy.get('#ordenamientoListado').select("Mayor Precio")



    })
})