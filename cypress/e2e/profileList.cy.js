describe('Hero Profile 檢查 List 變動能力值', () => {
  beforeEach(() => {
    cy.visit('/heroes/1')
    cy.request('GET', `https://hahow-recruit.herokuapp.com/heroes/1/profile`).its('body').as('hero')
    cy.wait(1000)
  })

  it('點選 - ，剩餘點數要 +1', () => {
    cy.getByData('sub').eq(0).click()
    cy.getByData('remainPoint').should('contain', 1)
  })

  it('當剩餘點數 > 0，點+ 會+1', () => {
    cy.get('@hero').then(({ int }) => {
      cy.getByData('sub').eq(0).click()
      cy.getByData('plus').eq(1).click()
      cy.getByData('pointV')
        .eq(1)
        .should('contain', int + 1)
    })
  })

  it('當剩餘點數 = 0，點+ 不會+1', () => {
    cy.get('@hero').then(({ str }) => {
      cy.getByData('plus').eq(0).click()
      cy.getByData('pointV').eq(0).should('contain', str)
    })
  })

  it('當能力值 = 0 時，點-不會-1', () => {
    cy.get('@hero').then(({ str }) => {
      cy.wrap(Array(str + 1).fill(0)).each(() => {
        cy.getByData('sub').eq(0).click()
      })
      cy.getByData('pointV').eq(0).should('contain', 0)
    })
  })

  it('當剩餘點數 !==0，存檔會跳 alert', () => {
    cy.getByData('sub').eq(0).click()
    cy.getByData('saveBtn').click()
    cy.on('window:alert', (msg) => {
      expect(msg).to.contain('剩餘點數應為 0，或合計不能超過')
    })
  })

  it('當存檔時，按鈕會 disabled，之後恢復並跳 alert', () => {
    cy.getByData('saveBtn').should('not.be.disabled').click()
    cy.getByData('saveBtn').should('be.disabled')
    cy.on('window:alert', (msg) => {
      expect(msg).to.contain('儲存成功')
    })
  })
})
