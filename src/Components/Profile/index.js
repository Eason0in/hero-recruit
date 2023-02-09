import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'

const initData = { remainPoint: 0, hero: { str: 0, int: 0, agi: 0, luk: 0 } }

function Profile() {
  const { heroId } = useParams()
  const [heroData, setHeroData] = useState(initData)
  const [maxPoint, setMaxPoint] = useState(0)
  const [isSaving, setIsSaving] = useState(false)

  const { remainPoint, hero } = heroData

  const getHeroSumPoint = (data) => Object.values(data).reduce((sum, cur) => (sum += cur), 0)

  useEffect(() => {
    fetch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setHeroData((last) => ({ ...last, hero: data }))
        setMaxPoint(getHeroSumPoint(data))
      })
      .catch((err) => {
        console.error('err', err)
        //#region  將資料恢復預設值
        setHeroData(initData)
        setMaxPoint(0)
        //#endregion
      })
  }, [heroId])

  const handleSave = () => {
    if (remainPoint > 0 || getHeroSumPoint(hero) !== maxPoint) return alert(`剩餘點數應為 0，或合計不能超過${maxPoint}`)

    setIsSaving(true)

    fetch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, {
      method: 'PATCH',
      body: JSON.stringify(hero),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert('儲存成功')
          console.log('儲存成功')
        } else {
          throw new Error('儲存失敗')
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsSaving(false))
  }

  /**
   * 控制能力值在合理的範圍，當以下條件符合才更新能力值
   * 1. + >> remainPoint > 0
   * 2. - >> hero[key] !== 0
   * @param {string} key 變動的能力
   * @param {number} count +1 / -1
   */
  const changeHeroData = (key, count) => {
    if ((count === 1 && remainPoint > 0) || (count === -1 && hero[key] !== 0)) {
      setHeroData(({ remainPoint, hero }) => ({
        remainPoint: remainPoint - count,
        hero: { ...hero, [key]: hero[key] + count },
      }))
    }
  }
  return (
    <section>
      <article>
        <ul>
          {Object.entries(hero).map(([key, value]) => (
            <li key={key}>
              <strong>{key.toUpperCase()}</strong>
              <div className="counter">
                <button className="plus" onClick={() => changeHeroData(key, 1)}>
                  +
                </button>
                <p>{value}</p>
                <button className="sub" onClick={() => changeHeroData(key, -1)}>
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      </article>
      <aside>
        <label>剩餘點數： {remainPoint}</label>
        <button onClick={handleSave} disabled={isSaving}>
          儲存
        </button>
      </aside>
    </section>
  )
}

export default Profile
