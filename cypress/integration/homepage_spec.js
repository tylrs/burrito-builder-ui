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
            .get('form > p')
            .contains('Order: Nothing selected')
            .get('.submit-button')
            .contains('Submit Order')
            .get ('.order')
            .should('have.length', 3)
            .get('section > :nth-child(1)')
            .contains('Pat')
            .get('section > :nth-child(1)')
            .contains('beans')
            .get('section > :nth-child(1)')
            .contains('lettuce')
            .get('section > :nth-child(1)')
            .contains('carnitas')
            .get('section > :nth-child(1)')
            .contains('queso fresco')
            .get('section > :nth-child(1)')
            .contains('jalapeno')
    })
})
