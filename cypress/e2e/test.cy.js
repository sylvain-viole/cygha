const { beforeEach } = require("mocha");

describe("On this testing page I should...", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('...See "Bienvenue !" as a title', () => {
    cy.contains("h1", "Bienvenue !").should("be.visible");
  });

  it('...See "Automation Tester Academy" as a valid link opening a new tab', () => {
    cy.contains("a", "Automation Tester Academy")
      .should("be.visible")
      .then((link) => {
        cy.wrap(link)
          .should("have.attr", "target", "_blank")
          .should("have.attr", "href")
          .and("contain", "https://formations.automationtesteracademy.com/")
          .then((href) => {
            cy.request(href).then((response) => {
              expect(response.status).to.eql(200);
            });
          });
      });
  });

  it('...Click a button containing "Bouton de test"', () => {
    cy.get("button#main_button").should("contain", "Bouton de test").click();
  });
});
