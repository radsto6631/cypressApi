/// <reference types="cypress" />

it("first API test", () => {

    cy.intercept("GET", "https://api.example.com/api/tags", { fixture: "tags.json" });
    cy.intercept("GET", "https://api.example.com/api/articles?limit=10&offset=0", { fixture: "articles.json" });
    
    cy.visit("/");
    cy.contains('Sign in').click();
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("password");
    cy.get('button[type="submit"]').click();


});