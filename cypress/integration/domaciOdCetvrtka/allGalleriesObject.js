class AllGalleries {
    get search() {
        return cy.get("input[type='text']")
    }
    get filter() {
        return cy.get("button[type='button']")
    }
    get loadMore() {
        return cy.get(":nth-child(3) > :nth-child(2) > .btn")
    }
    findGalleries(searchTerm) {
    this.search.type(searchTerm)
    this.filter.click()
    }
}
export const allGalleries = new AllGalleries()