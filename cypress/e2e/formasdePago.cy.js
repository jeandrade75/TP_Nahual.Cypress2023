    /// <reference types="cypress" />

    describe("Medios de pago", () => {
        it('fails to visit website 1', function () {
            cy.visit('https://www.invidcomputers.com')
            cy.get('#nav > :nth-child(5) > a').click()
            cy.get(':nth-child(3) > h3').should('have.text','EFECTIVO')
            cy.get(':nth-child(3) > p').should('have.text', 'Pagos en efectivo en pesos o dólares por caja.')
            cy.get(':nth-child(4) > h3').should('have.text', 'MERCADO PAGO')
            cy.get(':nth-child(4) > p').should('have.text', 'Solo pagos mediante transferencia a nuestra cuenta recaudadora del Banco Macro.')
            cy.get(':nth-child(5) > h3').should('have.text', 'A CRÉDITO')
            cy.get(':nth-child(5) > p').should('have.text', 'Pagos con e-cheques, únicamente luego de haber sido aprobada la solicitud crediticia.')

        })
    })