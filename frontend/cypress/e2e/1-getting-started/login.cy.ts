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

describe('Signup Test', () => {
  it('should signup with valid credentials', () => {
    cy.visit('http://localhost:5173/signup');
    cy.intercept('POST', '/users/register', {
      status: 200,
      message: 'User created successfully.',
    });

    cy.get('input[name="firstname"]').type('test');
    cy.get('input[name="lastname"]').type('testsson');
    cy.get('input[name="email"]').type('test@test.se');
    cy.get('input[name="password"]').type('password123');

    cy.get('button[type="submit"]').click();
  });

  it("shouldn't signup with invalid credentials", () => {
    cy.visit('http://localhost:5173/signup');

    cy.get('input[name="firstname"]').type('test');
    cy.get('input[name="lastname"]').type('testsson');
    cy.get('input[name="email"]').type('alen@alen.se');
    cy.get('input[name="password"]').type('password123');

    cy.get('button[type="submit"]').click();

    cy.get('[data-testid="cy-errorMsg"]')
      .should('be.visible')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
  });
});
