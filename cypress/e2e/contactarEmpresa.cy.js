/// <reference types="cypress" />

describe('Contactar empresa', () => {

    beforeEach(() => {
        cy.visit('https://www.invidcomputers.com/')
        });

        it('Llenar formulario PARA CONTACTAR EMPRESA', () => {

        cy.get('.has-submenu').eq(1).click()
        cy.contains('CONTACTO').trigger('mouseover').click()
        cy.get(':nth-child(1) > .form-control').click().type('Diana')
        cy.get(':nth-child(10) > :nth-child(2) > .form-control').click().type('Perez')
        cy.get(':nth-child(3) > .form-control').click().type('empresaQA@gmail.com')
        cy.get(':nth-child(4) > .form-control').click().type('118520147')
        cy.get(':nth-child(5) > .form-control').click().type('Argentina')
        cy.get('.col-md-12 > .form-control').click().type('Necesito contactar a un vendedor')
        cy.get('#tximseguridad').click().type('1234')
        //ingresar codigo erroneo
        cy.get('.col-sm-4 > .btn').click()
        cy.get('.marca').should('have.text', 'El código ingresado no coincide con la imagen de verificación. Por favor ingréselo nuevamente')
        //se valida mensaje de error
 
    });
});
