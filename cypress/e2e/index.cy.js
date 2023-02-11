describe('開啟專案會自動導到 /heroes 頁面', () => {
  it('開起 / 頁面會自動導到 /heroes 頁', () => {
    cy.visit('/')
    cy.url().should('include', 'heroes')
  })
})
