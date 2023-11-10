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

    // it('Loguearse', function () {

    //     cy.get('#login_sup > [href="#"]').click()
    //     cy.get('.modal.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(3) > #usuari')
    //     cy.get('.modal.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(4) > #passwd')

    // });

    it('Consultar Producto: Monitor', function () {

        cy.get('#top-buscar > #palabra').click().type('Monitor LG LED')
        cy.get('#top-buscar > .input-group-btn > .btn > .fa').click()
        cy.get('[href="monitor-lg-27-led-27mk400h-b-hdmi-full-hd-ii-1082---det--0411550"] > .img-responsive').click()
        cy.get('#precio > .btn').click()
        cy.get(':nth-child(1) > .form-control').click().type('Frankie')
        cy.get(':nth-child(10) > :nth-child(2) > .form-control').click().type('Ruiz')
        cy.get(':nth-child(3) > .form-control').click().type('frankie@gmail.com')
        cy.get(':nth-child(4) > .form-control').click().type('1174125963')
        cy.get(':nth-child(5) > .form-control').click().type('Argentina')
        cy.get('.col-md-12 > .form-control').click().type('Esto es un comentario')
        cy.get('#tximseguridad').click().type('0000')
        cy.get('.col-sm-4 > .btn').click()
        cy.get('.marca').should('have.text','El código ingresado no coincide con la imagen de verificación. Por favor ingréselo nuevamente')

    })
})