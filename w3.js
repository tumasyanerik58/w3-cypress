describe("w3schools search functionality",()=>{
    const MAIN_PAGE = "https://www.w3schools.com/";
    beforeEach(() => {
        cy.visit(MAIN_PAGE);
    });
    it("finds search input",()=>{
        //  if you get the cookie message, uncomment the code above
        // cy.get("#accept-choices").click();
        cy.get("#search2").type("javascript");
        cy.get(".search_item").eq(0).should("have.text","JavaScript Tutorial");
        cy.get(".search_item").eq(1).should("have.text","JavaScript Reference")
    })
})