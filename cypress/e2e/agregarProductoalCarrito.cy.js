/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

it('fails to visit website 1', function () {
    cy.visit('https://www.invidcomputers.com')
})

describe('Agregar Prodcuto al carrito', () => {

            beforeEach(() => {
                cy.visit('https://www.invidcomputers.com/')

            });

        it('Loguearse', function () {
            
        cy.get('#login_sup > [href="#"]').click()
        cy.get('.modal.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(3) > #usuari')
        cy.get('.modal.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(4) > #passwd')

        });

        it('Agregar Producto', function () {

        cy.get('#top-buscar > #palabra').click().type('Auricular')
        cy.get('#top-buscar > .input-group-btn > .btn > .fa').click()
        cy.get('#MARCA_OPCION_114').click()
        cy.contains('Se encontraron 6 ordenados por').click()
        cy.get('.list-view > .fa').click()


    })
    })
