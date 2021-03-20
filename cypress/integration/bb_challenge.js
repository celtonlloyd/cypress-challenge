describe("My First Test", () => {
  it("Tests aceinvoice app", () => {
    cy.visit(" https://www.aceinvoice.com/");
    cy.contains("Sign up for FREE").click();
    cy.get(".form-control").type("celtonll0yd-march-19-2021-2142@example.com");

    cy.contains("Get Started").click();
    cy.contains("Password").get(".form-control").type("welcome1234!");
    cy.contains("Continue").click();

    cy.get(":nth-child(2) > :nth-child(1) > .field-value > .form-control").type(
      "Oliver"
    );
    cy.get(":nth-child(2) > .field-value > .form-control").type("Smith");
    cy.get(":nth-child(3) > .form-group > .field-value > .form-control").select(
      "(GMT+05:30) New Delhi"
    );
    cy.get(
      '[data-test-id="introduction-date-format-%d/%m/%Y"] > :nth-child(1) > .control > .p-2'
    ).click();
    cy.get(".p-2 > :nth-child(2) > :nth-child(1)").click();
    cy.get(
      ":nth-child(6) > .form-group > .field-value > .control > .p-2"
    ).click();
    cy.get(".form-actions > .btn").click();
    cy.get(".simple_form > .row .form-control").type(
      "celtonlloyd Private Limited"
    );
    cy.get(".form-actions > .btn-primary").click();
    cy.contains("Skip this step").click();
    cy.get("html").should("contain", "Congratulations, you're all set!");
    cy.contains("Continue").click();
    cy.get("html").should("contain", "Verification email sent to");
    cy.contains("Clients").click();
    cy.contains("Add a new client").click();
    cy.get(":nth-child(1) > :nth-child(1) > .field-value > .form-control").type(
      "Trix Inc"
    );
    cy.contains("Submit").click();
    cy.get('[data-react-class="Organization/App"] > :nth-child(1)').should(
      "contain",
      "Add New Project"
    );
    cy.get(":nth-child(2) > .col-12 > .field-value > .form-control").type(
      "Trix Web Development"
    );
    cy.get(
      ":nth-child(3) > :nth-child(1) > .field-value > .form-control"
    ).select("Hourly project rate");
    cy.get(":nth-child(2) > .field-value > .form-control").type(
      "{selectall}20"
    );
    cy.get(".form-actions").contains("Submit").click({ force: true });
    cy.get("html")
      .should("contain", "Trix Web Development")
      .and("contain", "Hourly Project Rate")
      .and("contain", "No rounding")
      .and("contain", "Oliver Smith");
  });
});
