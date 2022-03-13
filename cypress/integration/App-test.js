// App-test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('End to End Test', () => {
  it('Should successfully render all components', () => {
    cy.visit('/');
    cy.contains(/Build The Community/i);
    cy.contains(/Get Started For Free/i).click();
    cy.contains(/Try It Free/i);
    cy.contains(/Grow Together/i);
    cy.contains(/Flowing Conversations/i);
    cy.contains(/Your Users/);
    cy.contains(/NEWSLETTER/i);
  });
});
