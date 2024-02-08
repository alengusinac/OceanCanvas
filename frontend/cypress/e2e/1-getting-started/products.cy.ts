describe('Rendering initial products', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/products');
    cy.intercept('GET', '/categories', { fixture: 'categories.json' });
  });

  it('loads products on page load', () => {
    cy.intercept('GET', '/products*', {
      fixture: 'products.json',
    });

    cy.get('[data-cy="productCard"]').should('have.length', 2);
  });

  it('handles error when loading products', () => {
    cy.intercept('GET', '/products*', {
      status: 500,
    });

    cy.get('[data-cy="errorMessage"]').should('be.visible');
  });
});

describe('Open filter and sort options', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/products');
    cy.intercept('GET', '/categories', { fixture: 'categories.json' });
    cy.intercept('GET', '/products*', {
      fixture: 'products.json',
    });
  });

  it("opens categories filter and selects 'Ship Wrecks'", () => {
    cy.get('[data-cy="categoriesBtn"]').should('be.visible').click();
    cy.contains('Ship Wrecks').click();
  });
});
