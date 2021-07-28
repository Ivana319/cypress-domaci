/// reference types="Cypress" />

describe ('Login', () => {
    it('Visit gallery home page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    it('Click on login button', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
    })

    it('Login with valid data', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
        cy.get('#email').type('test123123@test.com')
        cy.get('#password').type('test123123')
        cy.get('button').click()
    })

    it('Login without @ in email', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
        cy.get('#email').type('test123123test.com')
        cy.get('#password').type('test123123')
        cy.get('button').click()
    })

    it('Login without email', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
        cy.get('#email').should('have.value', '')
        cy.get('#password').type('test123123')
        cy.get('button').click()
    })

    it('Login with wrong email', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
        cy.get('#email').type('testtest123123123@gmail.com')
        cy.get('#password').type('test123123')
        cy.get('button').click()
        cy.get('.alert').should('have.text', 'Bad Credentials')
    })

    it('Login without password', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
        cy.get('#email').type('test123123@test.com')
        cy.get('#password').should('have.value', '')
        cy.get('button').click()
    })

    it('Login with wrong password', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
        cy.get('#email').type('test123123@test.com')
        cy.get('#password').type('testtesttest')
        cy.get('button').click()
        cy.get('.alert').should('have.text', 'Bad Credentials')
    })
})