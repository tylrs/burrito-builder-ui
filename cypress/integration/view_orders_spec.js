describe('View Orders On Page Load', () => {

    beforeEach(() => {
        cy.fixture('orders.json').then(orders => {
            cy.intercept('GET', 'http://localhost:3001/api/v1/orders', orders)
        })
        cy.visit('http://localhost:3000')
    })

    it('Should show pre-existing orders on page load', () => {
        cy
            .get('h1')
            .contains('Burrito Builder')
            .get('input')
            .should('be.visible')
            .get('form > .ingredient-button')
            .should('have.length', 12)
    })
})
