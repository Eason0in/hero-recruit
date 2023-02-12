import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Aside } from './styleds'

const RemainPointAndBtn = ({ getHeroSumPoint, heroData: { remainPoint, hero }, maxPoint }) => {
  const { heroId } = useParams()
  const [isSaving, setIsSaving] = useState(false)

  //#region  檢查是不是不符合規定
  // 1. 剩餘點數應該為 0
  // 2. 變動後的能力值加總不能超過 API 的初始值加總
  const checkIsInValid = () => remainPoint > 0 || getHeroSumPoint(hero) !== maxPoint
  //#endregion

  const handleSave = () => {
    if (checkIsInValid()) return alert(`剩餘點數應為 0，或合計不能超過${maxPoint}`)

    setIsSaving(true)

    //#region fetch patch 將資料更新到 API
    fetch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, {
      method: 'PATCH',
      body: JSON.stringify(hero),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          alert('儲存成功')
          console.log('儲存成功')
        } else {
          throw new Error('儲存失敗')
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsSaving(false))
    //#endregion
  }

  return (
    <Aside data-test="profile-aside">
      <label data-test="remainPoint">剩餘點數： {remainPoint}</label>
      <button onClick={handleSave} disabled={isSaving} data-test="saveBtn">
        儲存
      </button>
    </Aside>
  )
}

export default RemainPointAndBtn
