/// <reference types="cypress" />

describe('Get api user test', () => {
  it('get user ', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization:
          'Bearer 7b5b7dd8a13196231aa0f14913399f6544373423224271a5c945a6fe460237d5',
      },
    }).then((res) => {
      expect(res.status).to.eq(200)
      cy.log(JSON.stringify(res.body))
    })
  })
  it('get user by id', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/4240',
      headers: {
        Authorization:
          'Bearer 7b5b7dd8a13196231aa0f14913399f6544373423224271a5c945a6fe460237d5',
      },
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.name).to.eq('Miss Rajendra Dubashi')
      cy.log(JSON.stringify(res.body))
    })
  })
})
