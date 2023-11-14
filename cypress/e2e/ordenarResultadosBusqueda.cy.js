/// <reference types="cypress" />

describe('Ordenar Resultados de la busqueda ', () => {

                it('Ordenar resultados', () => {
                    cy.visit('https://www.invidcomputers.com/')
                // Buscar un producto
                cy.get('#top-buscar').click().type('Mouse Genius')
                cy.get('#top-buscar > .input-group-btn > .btn > .fa').click()
                // Seleccionar el producto deseado
                cy.get('.productFilter > .pull-left').should('be.visible')
                //.and('match', /ordenados por/)
                //.and('match', /serif/)
                //validar numero de items encontrados
                cy.get('#ordenamientoListado').select("Mayor Precio")

             
            })
            })
            