describe('Go to the website', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    
    const textInput = () => cy.get('#name-input')
    const toppingInput = () => cy.get('.topping')
    const submitPizzaForm = () => cy.get('#order-button')

    it('sanity checks', () => {
        // to create an assertion, use 'expect'
        expect(5).to.equal(5) // 5 === 5
        expect(1 + 2).to.equal(3) // 1 + 2 === 3
    })
    // Name test.
    it('adding text to textbox', () => {
        textInput().should('exist')
        .type('Aaron')
        // .should('have.value', Aaron)
    })
    it('Making it able to select multiple checkboxes/toppings', () => {
        toppingInput().should('exist')
            .check()
            .uncheck()
    })
    it('Testing to see if the submit button in the pizza file, submits.', () => {
        submitPizzaForm().should('exist')
        submitPizzaForm().click()

    })


})


