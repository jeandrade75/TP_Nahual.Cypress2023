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
                cy.visit('https://www.invidcomputers.com/')    //Seleccionar la categoría 
                cy.get(':nth-child(2) > .container-fluid > .navbar-header-lateral > .ley_cate_lateral_xs').click()
                cy.get('.nav > :nth-child(1) > #sup-prod-2').click()
                // Verificar que la página se cargue correctamente
                cy.get('#sup-prod-28').should('be.visible')



})
})