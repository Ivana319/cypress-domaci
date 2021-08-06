// <reference types="Cypress" />

describe("Create gallery through backend", () => {
  before(() => {
    cy.request({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/auth/login",
      body: {
        email: "ganguasmail@gmail.com",
        password: "12345678",
      },
    })
      .its("body")
      .then((responseBody) => {
        window.localStorage.setItem("token", responseBody.access_token);
      });
  });
  it("Create gallery", () => {
    const token = window.localStorage.getItem("token");
    cy.request({
      method: "POST",
      url: "https://gallery-api.vivifyideas.com/api/galleries",
      body: {
        title: "testGallery",
        description: "opisan opis",
        images: [
          "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
        ],
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log("create response -> ", response);
      expect(response.status).to.eq(201);
      expect(response.body.title).to.eq("testGallery");
      expect(response.body.description).to.eq("opisan opis");
    });
  });
});
