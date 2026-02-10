/// <reference types="cypress" />

it("first API test", () => {

    cy.visit("/");
    cy.contains('Sign in').click();
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("password");
    cy.get('button[type="submit"]').click();

    
});