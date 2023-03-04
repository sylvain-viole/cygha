const { beforeEach } = require("mocha");

describe("testing our test page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("I should see Bienvenue !", () => {
    cy.contains("Bienvenue !").should("be.visible");
  });

  it("I should click the button !", () => {
    cy.get("button#main_button").click();
  });
});
