/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

it('fails to visit website 1', function () {
    cy.visit('https://www.invidcomputers.com')
})

describe('Contactar empresa', () => {

    beforeEach(() => {
        cy.visit('https://www.invidcomputers.com/')
        cy.get('.row > :nth-child(1) > .list-unstyled > :nth-child(4) > a').click()
        cy.get(':nth-child(1) > .form-control').click().type('Maria')
        cy.get(':nth-child(10) > :nth-child(2) > .form-control').click().type('Perez')
        cy.get(':nth-child(3) > .form-control').click().type('maria@gmail.com')
        cy.get(':nth-child(4) > .form-control').click().type('118520147')
        cy.get(':nth-child(5) > .form-control').click().type('Argentina')
        cy.get('.col-md-12 > .form-control').click().type('Necesito contactar a un vendedor')
        cy.get('#tximseguridad').click().type('1234')
        cy.get('.col-sm-4 > .btn').click()
        cy.get('.marca').should('have.text', 'El código ingresado no coincide con la imagen de verificación. Por favor ingréselo nuevamente')


    });
})