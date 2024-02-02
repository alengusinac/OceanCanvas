beforeEach(() => {
  cy.visit('http://localhost:5173/');
});

describe('find components', () => {
  it('should display header, main & footer', () => {
    cy.get('header').should('exist');
    cy.get('main').should('exist');
    cy.get('footer').should('exist');
  });

  it('should display logo linking home', () => {
    cy.get('header a').should('have.attr', 'href', '/');
  });
});
