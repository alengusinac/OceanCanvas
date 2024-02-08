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

  it('clicks product and product page opens', () => {
    cy.intercept('GET', '/products*', {
      fixture: 'products.json',
    });

    cy.get('[data-cy="productCard"]').should('be.visible').first().click();
    cy.url().should('include', '/products/1');
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

  it('opens filter and sees two buttons', () => {
    cy.get('[data-cy="filtersBtn"]').should('be.visible').click();
    cy.get('[data-cy="filterBtn"]')
      .should('be.visible')
      .should('have.length', 2);
  });

  it('opens products per page select and selects "24 per page"', () => {
    cy.get('select[aria-label="products per page"]')
      .should('be.visible')
      .select('24 per page');
    cy.get('select[aria-label="products per page"]').should(
      'have.value',
      '24 per page'
    );
  });

  it('opens sort select and selects "Price High', () => {
    cy.get('select[aria-label="sort products by"]')
      .should('be.visible')
      .select('Price High');
    cy.get('select[aria-label="sort products by"]').should(
      'have.value',
      'Price High'
    );
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
});
