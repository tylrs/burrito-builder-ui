describe('Homepage user flow', () => {

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

    it('Should show a message if there are no orders returned', () => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {"orders": []})
        cy 
            .get('section > p')
            .contains('No orders yet!')
    })

    it('Should be able to submit an order', () => {
        cy.fixture('newOrder.json').then(newOrder => {
            cy.intercept('POST', 'http://localhost:3001/api/v1/orders', newOrder)
        })

        cy
            .get('input')
            .type('Taylor')
            .get('[name="beans"]')
            .click()
            .get('[name="queso fresco"]')
            .click()
            .get('[name="hot sauce"]')
            .click()
            .get('form > p')
            .contains('Order: beans, queso fresco, hot sauce')
            .get('.submit-button')
            .click()
            .get('section > :nth-child(4)')
            .contains('Taylor')
            .get('section > :nth-child(4)')
            .contains('beans')
            .get('section > :nth-child(4)')
            .contains('steak')
            .get('section > :nth-child(4)')
            .contains('carnitas')
            .get('form > p')
            .contains('Order: Nothing selected')
    })

    it('Should not submit an order if name input field or buttons are not filled out', () => {
        cy
            .get('input')
            .type('Taylor')
            .get('.submit-button')
            .click()
            .get('.error-message')
            .contains('Please enter name and at least one ingredient')

    })

    it ('Should be able to delete an order', () => {
        cy.intercept('DELETE', 'http://localhost:3001/api/v1/orders/:order_id', {status: 204})

        cy
            .get(':nth-child(1) > button')
            .click()
            .get ('.order')
            .should('have.length', 2)
            .get('section > :nth-child(1)')
            .contains('Sam')
            .get('section > :nth-child(1)')
            .contains('steak')
            .get('section > :nth-child(1)')
            .contains('pico de gallo')
            .get('section > :nth-child(1)')
            .contains('carnitas')
            .get('section > :nth-child(1)')
            .contains('queso fresco')
            .get('section > :nth-child(1)')
            .contains('jalapeno')
    })
})
