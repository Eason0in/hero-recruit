describe('Hero List 檢查', () => {
  beforeEach(() => {
    cy.visit('/heroes')
    cy.request('GET', 'https://hahow-recruit.herokuapp.com/heroes').its('body').as('listData')
  })

  it('開啟 /heroes 要發送 API 去要資料，要收到 4 筆資料', () => {
    cy.get('@listData').should('have.length', 4)
  })

  it('hover 任一張卡片要有 active 樣式', () => {
    cy.getByData('card-1').click().should('have.class', 'active')
    cy.getByData('card-2').click().should('have.class', 'active')
    cy.getByData('card-3').click().should('have.class', 'active')
    cy.getByData('card-4').click().should('have.class', 'active')
  })
})
