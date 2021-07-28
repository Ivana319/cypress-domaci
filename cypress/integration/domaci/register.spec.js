/// reference types="Cypress" />

describe ('Registration', () => {
    it('Visit gallery home page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    it('Click on register button', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
    })

    it('Register with valid data', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('Testic')
        const uniqueEmail = "test" + Math.random(100000) + "@gmail.com";
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('.form-check-input').click()
        cy.get('button').click()
        cy.get('.nav-link').should('have.length', 4)
        //cy.get('#password').should('be.gt', 7)
    })

    it('Register without first name', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#last-name').type('Testic')
        cy.get('#email').type('testtest1357@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('.form-check-input').click()
        cy.get('button').click()
        cy.get('#first-name').should('have.value', '')
        cy.get('.nav-link').should('have.length', 3)
        //cy.get('#password').should('be.gt', 7)
    })

    it('Register without last name', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').should('have.value', '')
        const uniqueEmail = "test" + Math.random(100000) + "@gmail.com";
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('.form-check-input').click()
        cy.get('button').click()
        cy.get('.nav-link').should('have.length', 3)
        //cy.get('#password').should('be.gt', 7)
    })

    it('Register without email', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('Testic')
        cy.get('#email').should('have.value', '')
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('.form-check-input').click()
        cy.get('button').click()
        cy.get('.nav-link').should('have.length', 3)
        //cy.get('#password').should('be.gt', 7)
    })

    it('Register without password', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('Testic')
        const uniqueEmail = "test" + Math.random(100000) + "@gmail.com";
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').should('have.value', '')
        cy.get('#password-confirmation').type('12345678')
        cy.get('.form-check-input').click()
        cy.get('button').click()
        cy.get('.nav-link').should('have.length', 3)
    })

    it('Register without confirmed password', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('Testic')
        const uniqueEmail = "test" + Math.random(100000) + "@gmail.com";
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').should('have.value', '')
        cy.get('.form-check-input').click()
        cy.get('button').click()
        cy.get('.nav-link').should('have.length', 3)
    })

    it('Register with unchecked checkbox ', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('Testic')
        const uniqueEmail = "test" + Math.random(100000) + "@gmail.com";
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('[type="checkbox"]').uncheck()
        cy.get('button').click()
        cy.get('.nav-link').should('have.length', 3)
    })

    it('Register without @ in email', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('Testic')
        const uniqueEmail = "test" + Math.random(100000) + "gmail.com";
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('.form-check-input').click()
        cy.get('button').click()
        cy.get('.nav-link').should('have.length', 3)
    })

    it('Register with space in email', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('Testic')
        const uniqueEmail = "te st" + Math.random(100000) + "@gmail.com";
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('12345678')
        cy.get('.form-check-input').click()
        cy.get('button').click()
        cy.get('.nav-link').should('have.length', 3)
    })

    it('Register with wrong password confirmation', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('Testic')
        const uniqueEmail = "test" + Math.random(100000) + "@gmail.com";
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').type('12345678')
        cy.get('#password-confirmation').type('nwqiod86')
        cy.get('.form-check-input').click()
        cy.get('button').click()
        cy.get('.nav-link').should('have.length', 3)
        cy.get('.alert').should('have.text', 'The password confirmation does not match.')
    })

    it('Register with 1 character password', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type('Test')
        cy.get('#last-name').type('Testic')
        const uniqueEmail = "test" + Math.random(100000) + "@gmail.com";
        cy.get('#email').type(uniqueEmail)
        cy.get('#password').type('1')
        cy.get('#password-confirmation').type('1')
        cy.get('.form-check-input').click()
        cy.get('button').click()
        cy.get('.nav-link').should('have.length', 3)
        cy.get('.alert').should('have.text', 'The password must be at least 8 characters.')
    })
})