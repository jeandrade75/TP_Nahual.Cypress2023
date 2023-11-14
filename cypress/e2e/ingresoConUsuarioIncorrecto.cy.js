/// <reference types="cypress" />

describe('Ingreso co credenciales erroneas', () => {
    it('Validar URL', () => {
        cy.visit('https://www.invidcomputers.com/')
        cy.get('#login_sup > [href="#"]').click()
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(3) > #usuari').click().type(' cypress1233@gmail.com')
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(4) > #passwd').click().type('123456789')
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(5) > .btn').click()
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > .alert').should('have.text', 'Usuario / clave incorrecto')

        });
        });
        


    

