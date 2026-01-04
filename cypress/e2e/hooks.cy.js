describe('MyTestSuite', ()=>{

    before(() => {
        // Runs before all the tests only once
        cy.log("*** Launch App ***");
    })

    after(() => {
         // Runs after all the tests only once
        cy.log("*** Close App ***");
    })

    beforeEach(() => {
        // Runs before each test
        cy.log("*** Before Each ***");
    })

    afterEach(() => {
        // Runs after each test
        cy.log("*** After Each ***");
    })


    it('Search', ()=>{
        cy.log("*** Searching ***");
    })


    
    it('Advanced Search', ()=>{
        cy.log("*** Advanced Searching ***");
    })


    it('Listing Products', ()=>{
        cy.log("*** Listing Products ***");
    })
})