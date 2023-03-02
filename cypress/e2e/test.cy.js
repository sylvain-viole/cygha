describe("this is a test", () => {
  it("should see Bienvenue !", () => {
    cy.visit("localhost:3000/");
    cy.contains("Bienvenue !").should("be.visible");
  });
});
