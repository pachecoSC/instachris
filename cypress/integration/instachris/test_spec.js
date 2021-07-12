/* global describe, it, expect,cy,Cypress */

describe('mi primer test', function () {
  it('para ver si funciona', function () {
    expect(true).to.equal(true)
  })
})

describe('InstaChris', function () {
  it('para ver si funciona', function () {
    cy.visit('/')
  })

  it('navegar categoria y ver fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('navegar con la navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('eq', Cypress.config().baseUrl)
  })

  it('user sin registro vean solo formularios', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 1)
  })
})
