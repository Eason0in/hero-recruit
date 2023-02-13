describe('Hero List 檢查', () => {
  beforeEach(() => {
    cy.visit('/heroes')
    cy.request('GET', 'https://hahow-recruit.herokuapp.com/heroes').its('body').as('listData')
  })

  it('開啟 /heroes 要發送 API 去要資料，要收到 4 筆資料', () => {
    cy.get('@listData').should('have.length', 4)
  })

  it('hover 任一張卡片要會有字體顏色變化及 border 樣式', () => {
    cy.get('@listData').each(({ id }) => {
      cy.getByData(`card-${id}`)
        .realHover()
        .should('have.css', 'color', 'rgb(0, 149, 144)')
        .and('have.css', 'border-color', 'rgb(0, 149, 144)')
    })
  })
})
