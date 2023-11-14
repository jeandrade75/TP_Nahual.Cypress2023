/// <reference types="cypress" />

    describe('Validar acceso a RRSS', () => {

    beforeEach(() => {
    cy.visit('https://www.invidcomputers.com/')

    });

    it('Validar redireccion a Linkedin', () => {
        cy.get('.social-share > :nth-child(2) > a').should('be.visible')
        cy.get('.social-share > :nth-child(2) > a').click() //Linkedin
        cy.wait(4000)

    })
   
    it('Validar redireccion a facebook', () => {
        cy.get('.social-share > :nth-child(5) > a').should('be.visible')
        cy.get('.social-share > :nth-child(5) > a').click()//facebook
        
    })

    it('Validar redireccion a youtube', () => {
        cy.get(':nth-child(4) > a > .fa').should('be.visible')
        cy.get(':nth-child(4) > a > .fa').click()//youtube
        
    })
    
    it('Validar redireccion a instagram', () => {
        cy.get(':nth-child(3) > a > .fa').should('be.visible')
        cy.get(':nth-child(3) > a > .fa').click()//instagram

    })
    })
