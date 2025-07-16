describe('Bug Tracker', () => {
  it('submits a new bug', () => {
    cy.visit('http://localhost:3000');
    cy.get('input[placeholder="Title"]').type('Bug A');
    cy.get('textarea[placeholder="Description"]').type('Bug description');
    cy.get('button').click();
    cy.contains('Bug A');
  });
});
