import { createGallery } from './createGalleryObjects';
import { authLogin } from "./loginObject";
import { header } from "./headerObject";

describe('POM create gallery', () => {
    it('Create gallery using POM', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
        authLogin.login('test123123@test.com', 'test123123')
        header.goToCreateGallery();
        createGallery.createGallery('psic', 'opis', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dog_anatomy_lateral_skeleton_view.jpg/800px-Dog_anatomy_lateral_skeleton_view.jpg', 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg')
    })
})