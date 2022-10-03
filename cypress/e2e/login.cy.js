describe("empty spec", () => {
  it("passes", () => {
    cy.viewport(1366, 660);
    cy.visit("http://localhost:3000/");

    cy.contains("Email").click({ force: true }).type("teste@gmail.com");
    cy.contains("Password").click({ force: true }).type("teste");
    cy.contains("Entrar").click();
  });
});
