/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    
    
    cy.get("#autocomplete").click()
    cy.get("#autocomplete").type("test write")

    cy.log('the title of the page is ---> ',cy.title())
    cy.log('the url of the page is ---> ',cy.url())
  })
})