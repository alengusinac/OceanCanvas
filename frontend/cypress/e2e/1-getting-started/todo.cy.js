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

describe('Login Test', () => {
  it('should login with valid credentials', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[name="email"]').type('test@example.com');

    cy.get('input[name="password"]').type('password123');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/');

    cy.get('[data-testid="cy-menuIcon"]').click();

    cy.get('button[name="logout"]').should('be.visible');
  });

  it("shouldn't login with invalid credentials", () => {
    cy.visit('http://localhost:5173/login');

    cy.get('input[name="email"]').type('wrong@email.com');

    cy.get('input[name="password"]').type('wrongpassword');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/login');

    cy.get('[data-testid="cy-errorMsg"]')
      .should('be.visible')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
  });
});
