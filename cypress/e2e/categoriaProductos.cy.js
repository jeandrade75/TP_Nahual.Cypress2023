/// <reference types="cypress" />
let usuario = '27958229300'
let password = 'Reyes123'

describe('Validar Categoria > Monitores > Corporativos', () => {
    it('Validar URL', () => {
        cy.visit('https://www.invidcomputers.com/')

        cy.get('.has-submenu').first(1).click()
        cy.contains('Monitores').trigger('mouseover').click()
        cy.get('.productFilter > .pull-left').should('include.text','Se encontraron')
        cy.get(':nth-child(1) > .favButton > .far').click()
        //cy.get('#login_sup > [href="#"]').click()
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(3) > #usuari').click()
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(3) > #usuari').click().type(usuario)
        cy.get('.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(4) > #passwd').click().type(password)
        cy.get('input').eq(12).click()

        //cy.get('.modal.in > .modal-dialog > .loginmodal-container > .modal-body > #form > :nth-child(5) > .btn').click()


        // cy.get('#top-buscar > #palabra').click().type('Monitores')
        // cy.get('#top-buscar > .input-group-btn > .btn > .fa').click()
        // cy.get('.nav > :nth-child(19) > #sup-prod-20').click()
        // cy.get('#sup-prod-115').click()
        // cy.get('h1 > [href="monitor-corporativo-monitores--prod--115"]').should('have.text', 'Monitor Corporativo')

    })
})
