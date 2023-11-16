/// <reference types="cypress" />

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
//})

describe('Login', () => {

            it('Validar login exitoso', () => {

                cy.visit('https://www.invidcomputers.com/')
                //Hacer clic en el boton de ingresar
                cy.get('#login_sup > [href="#"]').click()
                cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(3) > #usuari').click()
                cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(3) > #usuari').click().type('27958229300')
                cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(4) > #passwd').click().type('Reyes123')
                cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(5) > .btn').click()
                cy.get('input').eq(12).click()
                //cy.get('#carrito_top > .ircarrito').click()
                

            })
        })
