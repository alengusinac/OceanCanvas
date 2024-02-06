beforeEach(() => {
  cy.visit('http://localhost:5173/');
});

describe('find main components', () => {
  it('should display header, main & footer', () => {
    cy.get('header').should('exist');
    cy.get('main').should('exist');
    cy.get('footer').should('exist');
  });
});

describe('find header components', () => {
  it('should display logo linking home', () => {
    cy.get('header a').should('have.attr', 'href', '/');
  });

  it('should display navigation', () => {
    cy.get('[data-testid="cy-menuIcon"]').should('be.visible').first().click();
    cy.get('nav').should('be.visible').find('button').should('have.length', 6);
  });

  it('should display shopping cart', () => {
    cy.get('[data-testid="cy-cartIcon"]').should('be.visible').first().click();
  });
});
