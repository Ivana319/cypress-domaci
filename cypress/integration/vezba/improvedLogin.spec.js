/// <reference types="Cypress" />

const Locators = require('../../fixtures/Locators.json');
const faker = require('faker');

let userData = {
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}

let userData2 = {
    randomFirstName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}

describe('Poboljsani testovi', () => {
    let correctEmail = 'test123123@test.com'
    let correctPassword = 'test123123'

    beforeEach(() => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.url().should("contains", "https://gallery-app")
    })

    it('Login with valid credentials', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type(correctPassword)
    })

    it('Logout', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type(correctPassword)
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Login.Logout).should('be.visible').click()
    })

    it('Register', () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type('test321')
        cy.get(Locators.Register.LastName).type('testteest13')
        cy.get(Locators.Register.Email).type('test321111@test.com')
        cy.get(Locators.Register.Password).type('pasword123')
        cy.get(Locators.Register.ConfirmedPassword).type('pasword123')
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
    })

    it('Login with random credentials', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(userData.randomEmail)
        cy.get(Locators.Login.Password).type(userData.randomPassword)
        cy.get(Locators.Login.Submit).click()
    })

    it('Register with random data', () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(userData2.randomFirstName)
        cy.get(Locators.Register.LastName).type(userData2.randomLastName)
        cy.get(Locators.Register.Email).type(userData2.randomEmail)
        cy.get(Locators.Register.Password).type(userData2.randomPassword +123)
        cy.get(Locators.Register.ConfirmedPassword).type(userData2.randomPassword +123)
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
    })
})