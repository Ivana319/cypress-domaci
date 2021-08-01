/// <reference types="Cypress" />

const Locators = require('../../fixtures/Locators.json');
const faker = require('faker');


let userData1 = {
    randomFirstName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password(),
    randomTitle : faker.lorem.word(),
    randomDescription : faker.lorem.sentence(),
    randomImage : faker.image.image(),
}
describe('Create gallery', () => {

    beforeEach(() => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.url().should("contains", "https://gallery-app")
    })

    it('Create gallery with valid credentials', () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(userData1.randomFirstName)
        cy.get(Locators.Register.LastName).type(userData1.randomLastName)
        cy.get(Locators.Register.Email).type(userData1.randomEmail)
        cy.get(Locators.Register.Password).type(userData1.randomPassword +123)
        cy.get(Locators.Register.ConfirmedPassword).type(userData1.randomPassword +123)
        cy.get(Locators.Register.Checkbox).check()
        cy.get(Locators.Register.Submit).click()
        cy.get(Locators.Login.Logout).should('be.visible').click()
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(userData1.randomEmail)
        cy.get(Locators.Login.Password).type(userData1.randomPassword +123)
        cy.get(Locators.Login.Submit).should('be.visible').click()
        cy.get(Locators.Header.CreateGallery).click()
        cy.get(Locators.CreateGallery.Titile).type(userData1.randomTitle)
        cy.get(Locators.CreateGallery.Description).type(userData1.randomDescription)
        cy.get(Locators.CreateGallery.Images1).type(userData1.randomImage + '.jpg')
        cy.get(Locators.CreateGallery.AddImage).click()
        cy.get(Locators.CreateGallery.Images2).type(userData1.randomImage + 1 +'.jpg')
        cy.get(Locators.CreateGallery.Submit).click()
    })
})