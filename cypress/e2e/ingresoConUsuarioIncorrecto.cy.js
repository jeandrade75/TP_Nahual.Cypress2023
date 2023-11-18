/// <reference types="cypress" />

describe('Ingreso co credenciales erroneas', () => {
    it('Validar URL', () => {
        cy.visit('https://www.invidcomputers.com/')
        cy.get('#login_sup > [href="#"]').click()
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(3) > #usuari').click().type(' cypress1233@gmail.com')
        //se ingresa usuario invalido
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(4) > #passwd').click().type('123456789')
        //se ingresa clave invalida
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(5) > .btn').click()
        //se hace click en el boton login
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > .alert').should('have.text', 'Usuario / clave incorrecto')
        //se valida mensaje de error que no permite loguearse

        });
        });
        


    

