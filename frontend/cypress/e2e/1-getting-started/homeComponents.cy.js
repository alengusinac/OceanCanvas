beforeEach(() => {
  cy.visit('http://localhost:5173/');
});

describe('find main components', () => {
  it('should display header, main & footer', () => {
    cy.get('header').should('exist');
    cy.get('main').should('exist');
    cy.get('footer').should('exist');
  });

  it('should display a specific title in the header', () => {
    cy.get('h1').should('have.text', 'Welcome to OceanCanvas');
  });

  it('should display a specific text in the footer', () => {
    cy.get('footer p')
      .first()
      .should('have.text', 'Subscribe to our newsletter:');
  });
});

describe('find header and drawer components', () => {
  it('should display logo linking home', () => {
    cy.get('header a img').should(
      'have.attr',
      'src',
      '/src/assets/oceancanvas-logo.png'
    );
    cy.get('header a').should('have.attr', 'href', '/');
  });

  it('should display navigation', () => {
    cy.get('[data-testid="cy-menuIcon"]').should('be.visible').first().click();
    cy.get('nav').should('be.visible').find('button').should('have.length', 6);
  });

  it('should display Login and Sign Up button', () => {
    cy.get('[data-testid="cy-menuIcon"]').should('be.visible').first().click();
    cy.get('button[name="signup"]').should('be.visible');
    cy.get('button[name="login"]').should('be.visible');
  });

  it('should display empty shopping cart', () => {
    cy.get('[data-testid="cy-cartIcon"]').should('be.visible').first().click();
    cy.get('h4').should('have.text', 'Shopping Cart');
    cy.get('span').should('have.text', 'Your cart is empty.');
    cy.get('button[name="checkout"]').should('not.exist');
  });

  it('should navigate to a specific page when a navigation link is clicked', () => {
    cy.get('[data-testid="cy-menuIcon"]').first().click();
    cy.get('button[name="login"]').click();
    cy.url().should('include', '/login');
  });
});
