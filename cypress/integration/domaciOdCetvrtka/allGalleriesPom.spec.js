import { allGalleries } from './allGalleriesObject';

describe('POM all galleries', () => {
    it('Go to All galleries using POM', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        allGalleries.findGalleries('psic')
    })
})