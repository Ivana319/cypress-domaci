class Header {
    get loginButton(){
        return cy.get("a[href='/login']")
    }
    get registerButton(){
        return cy.get("a[href='/register']")
    }
    get logoutButton(){
        return cy.get("a[role='button ']")
    }
    logout(){
        this.logoutButton.click()
    }
    get createGalleryButton() {
        return cy.get("a[href='/create']");
    }
    goToCreateGallery() {
        this.createGalleryButton.click();
    }
}
export const header = new Header()