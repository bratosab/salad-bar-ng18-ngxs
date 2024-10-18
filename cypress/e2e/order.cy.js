describe('Start Order', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

    it('should see two controls', () => {
        cy.get('input').should('have.length', 2)
    })

    it('should fill signup form', () => {
        cy.get('[data-test="name-control"]').type('John Doe')
        cy.get('[data-test="tel-control"]').type('001110101011')

        cy.get('[data-test="submit-control"]').click()
    })
})