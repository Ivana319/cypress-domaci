class CreateGallery {
    get title() {
        return cy.get('#title')
    }
    get description() {
        return cy.get('#description')
    }
    get image1() {
        return cy.get("input[type='url']")
    }
    get addimage() {
        return cy.get("form > :nth-child(3) > :nth-child(3)")
    }    
    get image2() {
        return cy.get(":nth-child(3) > .input-group > .form-control")
    }
    get submit() {
        return cy.get('form > :nth-child(4)')
    }

    
    createGallery(title,description,image1,image2){
        this.title.type(title)
        this.description.type(description)
        this.image1.type(image1)
        this.addimage.click()
        this.image2.type(image2)
        this.submit.click()
    }
}
export const createGallery = new CreateGallery()