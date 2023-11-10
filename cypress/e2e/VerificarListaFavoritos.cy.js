/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Home de Tiendamia', () => {

beforeEach(() => {
        cy.visit('https://tiendamia.com/ar/')
        
    })

    it('Registrarse', () => {
        cy.get('.header-registermagento > a').click()
        cy.get('.input-box > #firstname').type('Juan')
        cy.get('.input-box > #lastname').type('Lopez')
        cy.get(':nth-child(3) > .form-list > :nth-child(1) > .field > .input-box > #email_address_register').type('cpitbul@monthologiesmerch.com')
        cy.get('#password-reg').type('123456')
        cy.get('#register-button > :nth-child(1) > span').click()

    })
    
    it('Validar y cerrar popup', () => {
        cy.get('#close-popup-button-last > p').click() 
        cy.get('.input_amz > #amz').click()
        cy.get('.input_amz > #amz').type('Remera Argentina 3 estrellas')
        cy.wait(2000)
        cy.get('#search-lupa').click()
        cy.get('[data-sku="AMZ-B0C2QN722Z"] > a > .image-container > .main-image').click()
        

    })
})