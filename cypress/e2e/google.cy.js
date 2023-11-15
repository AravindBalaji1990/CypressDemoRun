/// <reference types="Cypress" />
require('@cypress/xpath');

describe('template spec', () => {
  it('passes', () => {
    
   

    cy.visit('www.google.com')
    
    cy.title().should('eq','Google')
    
     
    cy.xpath("//div[@jscontroller='Dvn7fe']/child::div").then(($lt)=>{
      cy.log('the items available',$lt.length);
    })
   
  })
})