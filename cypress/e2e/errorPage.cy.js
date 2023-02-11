describe('輸入錯誤網址會導到 error page', () => {
  beforeEach(() => {
    cy.visit('/abc')
  })

  it('錯誤網址，即導到 error page', () => {
    cy.getByData('error-page').should('exist')
  })

  it('點擊回 Heroes 按鈕要回到 /heroes', () => {
    cy.getByData('back-heroes-link').click()
    cy.url().should('include', 'heroes')
  })
})
