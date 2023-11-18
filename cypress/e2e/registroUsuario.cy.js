/// <reference types="cypress" />

describe('Primer login del usuario', () => {

      beforeEach(() => {
        cy.visit('https://www.invidcomputers.com/')
      
      }); 

        it('Registrar nuevo usuario', () =>{
        cy.get('#login_sup > .registronuevo').click()
        cy.get('#recetaForm > :nth-child(3) > .form-control').click().type(' Nombre de prueba QA')
        //Escribir nombre del usuario
        cy.get('#recetaForm > :nth-child(4) > .form-control').click().type('Empresa Testing')
        //Escribir nombre de la empresa a la que pertenece
        cy.get('#domicilio').click().type('Av. España 1500 9a')
        //Escribir el domicilio del usuario
        cy.get('#localidad').click().type('Boedo')
        //Escribir nombre de la localidad
        cy.get('#cod_postal').click().type('C1424')
        //Escribir codigo postal
        cy.get('#provincia').select("CABA")
        //Escribir nombre de la provincia
        cy.get('#horario_entrega').click().type('Todo el dia')
        //seleccionar la opcion de horario de entrega del pedido
        cy.get('#clonarDestino').check()
        //En esta opcion se le permite al usuario seleccionar la misma direccion 1
        cy.get('#posicion_fiscal').select('Monotributista')
        //Seleccionar situacion impositiva 
        cy.get(':nth-child(17) > .form-control').click().type('204125896')
        //Escribir numero de CUIL
        cy.get(':nth-child(18) > .form-control').click().type('1141025896')
        //Escribir numero tlf de la empresa
        cy.get(':nth-child(19) > .form-control').click().type('test@gmail.com')
        //Escribir mail de registro de la empresa
        
        cy.get('#file_cuit').selectFile('cypress/e2e/images/DOS.png')
        //adjuntar constancia del CUIT
        cy.get('#file_iibb').selectFile('cypress/e2e/images/TRES.png') //{force: true})
        //adjuntar constancia del IIBB
        cy.get('#file_anexo2 ').selectFile('cypress/e2e/images/UNO.png') // {force: true})
        //adjuntar constancia del DNI
        cy.get('[value="N"]').click()
        cy.get('#perfil').select('Otro')
        cy.get('#credito').check()
        cy.get('#termYCond').check()
        
      });
});

       


 