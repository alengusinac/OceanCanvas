describe('Rendering initial product', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/products/1');
    cy.intercept('GET', '/products/*', {
      fixture: 'product.json',
    });
    cy.contains('button', 'Add to Cart').should('be.visible').click();
    cy.get('[aria-label="size selector menu"]').should('be.visible').click();
    cy.get('[aria-label="size selector option"]')
      .should('be.visible')
      .eq(1)
      .click();
    cy.contains('button', 'Add to Cart').should('be.visible').click();

    cy.get('button[aria-label="open cart"]').should('be.visible').click();
  });

  it('fills out checkout form and submits an order', () => {
    cy.visit('http://localhost:5173/checkout');
    cy.intercept('POST', '/orders/add', {
      fixture: 'order.json',
    });
    cy.url().should('include', '/checkout');

    cy.get('input[name="email"]').type('john@doe.lol');
    cy.get('input[name="firstname"]').type('John');
    cy.get('input[name="lastname"]').type('Doe');
    cy.get('input[name="address"]').type('123 Main St');
    cy.get('input[name="city"]').type('New York');
    cy.get('input[name="zipcode"]').type('12345');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('input[name="country"]').type('United States');
    cy.get('button[type="submit"]').first().click();

    cy.get('input[name="cardNumber"]').type('5353579932360428');
    cy.get('input[name="expirationDate"]').type('11/25');
    cy.get('input[name="ccv"]').type('123');
    cy.get('button[type="submit"]').eq(1).click();

    cy.url().should('include', '/confirm-order');
  });

  it('fills out checkout form and fails on empty address input', () => {
    cy.visit('http://localhost:5173/checkout');
    cy.intercept('POST', '/orders/add', {
      fixture: 'order.json',
    });
    cy.url().should('include', '/checkout');

    cy.get('input[name="email"]').type('john@doe.lol');
    cy.get('input[name="firstname"]').type('John');
    cy.get('input[name="lastname"]').type('Doe');
    cy.get('input[name="address"]').type('123 Main St');
    cy.get('input[name="city"]').type('New York');
    cy.get('input[name="zipcode"]').type('12345');
    cy.get('input[name="country"]').type('United States');
    cy.get('button[type="submit"]').first().click();

    cy.get('input[name="cardNumber"]').should('not.exist');
  });

  it('fills out checkout form and fails on faulty cardNumber input', () => {
    cy.visit('http://localhost:5173/checkout');
    cy.intercept('POST', '/orders/add', {
      fixture: 'order.json',
    });
    cy.url().should('include', '/checkout');

    cy.get('input[name="email"]').type('john@doe.lol');
    cy.get('input[name="firstname"]').type('John');
    cy.get('input[name="lastname"]').type('Doe');
    cy.get('input[name="address"]').type('123 Main St');
    cy.get('input[name="city"]').type('New York');
    cy.get('input[name="zipcode"]').type('12345');
    cy.get('input[name="country"]').type('United States');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('button[type="submit"]').first().click();

    cy.get('input[name="cardNumber"]').type('535357993236048');
    cy.get('input[name="expirationDate"]').type('11/25');
    cy.get('input[name="ccv"]').type('123');
    cy.get('button[type="submit"]').eq(1).click();

    cy.contains('p', 'Invalid card number').should('be.visible');
  });
});
