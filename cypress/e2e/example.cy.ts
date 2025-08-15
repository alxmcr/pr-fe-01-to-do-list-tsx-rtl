describe('Example Test', () => {
  it('should visit the home page', () => {
    cy.visit('/')
    cy.get('body').should('be.visible')
  })
})
