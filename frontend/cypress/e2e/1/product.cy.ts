describe('Rendering initial product', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/products/1');
    cy.intercept('GET', '/products/*', {
      fixture: 'product.json',
    });
  });

  it('loads products on page load', () => {
    cy.url().should('include', '/products/1');
  });

  it('loads product info', () => {
    cy.get('h2').should('have.text', 'Wreck');
    cy.get('img').should('be.visible');
    cy.get('[aria-label="size selector menu"]').should('be.visible').click();
    cy.get('[aria-label="size selector option"]')
      .should('be.visible')
      .first()
      .click();
    cy.contains('button', 'Add to Cart').should('be.visible');
  });

  it('add to cart, choose different size and add to cart again', () => {
    cy.contains('button', 'Add to Cart').should('be.visible').click();
    cy.get('[aria-label="size selector menu"]').should('be.visible').click();
    cy.get('[aria-label="size selector option"]')
      .should('be.visible')
      .eq(1)
      .click();
    cy.contains('button', 'Add to Cart').should('be.visible').click();

    cy.get('button[aria-label="open cart"]').should('be.visible').click();
    cy.get('[data-cy="cartItem"]').should('have.length', 2);
  });
});
