describe("Start Order", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/toppings", {
      statusCode: 200,
      fixture: "toppings.json",
    }).as("getToppings");

    cy.visit("http://localhost:4200");

    cy.get('[data-test="name-control"]').type("John Doe");
    cy.get('[data-test="tel-control"]').type("001110101011");

    cy.get('[data-test="submit-control"]').click();
  });

  it("verify getToppings API response", () => {
    cy.wait("@getToppings").should(({ request, response }) => {
      expect(response?.statusCode).to.eq(200);
      expect(request.method).to.eq("GET");
    });
  });

  it("verify toppings list", () => {
    cy.wait("@getToppings")

    cy.get('mat-selection-list mat-list-option').first().contains('Tomatoes')
  });

  it("verify total toppings price", () => {
    cy.wait("@getToppings")

    cy.get('mat-selection-list mat-list-option').first().click()
    cy.get('mat-selection-list mat-list-option').next().click()

    cy.get('p').contains('8 €')
  });
});
