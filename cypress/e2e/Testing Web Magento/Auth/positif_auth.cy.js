import { faker } from '@faker-js/faker';
import authPage from "../../../support/pageObject/authPage";

describe('Positif Case Registrasi & Login', () => {
    beforeEach(() => {
        cy.visit('')
    });

    it('Registrasi', () => {
        const randomEmail = faker.internet.email()
        authPage.clickRegist()
        cy.get(authPage.fname).type('Rio')
        cy.get(authPage.lname).type('Shollu')
        cy.get(authPage.mail).type(randomEmail)
        cy.get(authPage.pass).type('Asdasd123')
        cy.get(authPage.kpass).type('Asdasd123')
        authPage.btnCreate()

        // Menyimpan email kedalam variabel env
        // cy.wrap(randomEmail).as('registeredEmail')

        // Cypress.env('registeredEmail', randomEmail)

    });

    it('Login', () => {
        authPage.loginAccount()
    });
    
});