/// <reference types="cypress" />
describe('Checking checkbox funcanility', () => {
  it('Validating check box', () => {
    cy.visit('https://en.zalando.de/men-home/')
    cy.viewport(2000, 1000)
    cy.get('._0Qm8W1')
      .contains('Get the Look')
      .trigger('mouseover')
      .click('center', 'All outfits')
    cy.url().should('include', 'get-the-look-men')
  })
})
