describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('displays hej', () => {
    cy.get('.hej-text').should('contain', 'HEJ');
  });
});
