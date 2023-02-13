describe('Hero Profile 檢查 render', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.request('GET', 'https://hahow-recruit.herokuapp.com/heroes').its('body').as('listData')
  })

  it('點選的英雄 id 有出現在 url params 以及卡片有 active class', () => {
    cy.get('@listData').each(({ id }) => {
      cy.getByData(`card-${id}`).click().should('have.class', 'active')
      cy.url().should('include', id)
    })
  })

  it('點選任一張卡片要出現下方 dog、profile 和 remainPointAndBtn 區塊', () => {
    cy.get('@listData').each(({ id }) => {
      cy.getByData(`card-${id}`).click()
      cy.getByData('dog-div').should('exist')
      cy.getByData('profile-article').should('exist')
      cy.getByData('profile-aside').should('exist')
    })
  })

  it('hover 在 dog 上右邊文字要出現', () => {
    cy.getByData(`card-1`).click()
    cy.getByData('dog-div').realHover()
    cy.getByData('dog-p').should('have.css', 'display', 'block')
  })
})
