import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'

const initData = { remainPoint: 0, hero: { str: 0, int: 0, agi: 0, luk: 0 } }

function Profile() {
  const { heroId } = useParams()
  const [heroData, setHeroData] = useState(initData)
  const [maxPoint, setMaxPoint] = useState(0)

  const { remainPoint, hero } = heroData

  useEffect(() => {
    fetch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setHeroData((last) => ({ ...last, hero: data }))
        const max = Object.values(data).reduce((sum, cur) => (sum += cur), 0)
        setMaxPoint(max)
      })
      .catch((err) => {
        console.error('err', err)
        setHeroData(initData)
      })
  }, [heroId])

  const handleSave = () => {
    // fetch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, {
    //   method: 'PATCH',
    //   body: JSON.stringify({
    //     title: 'foo',
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
  }

  const changeHeroData = (key, count) => {
    //#region 控制能力值在合理的範圍
    // 1. 當是加的時候， remainPoint 等於 0 就不做；因為沒有多餘的點數可以用了
    // 2. 當是減的時候，remainPoint 等於最大值就不做；因為不能超過最大值
    // 3. 當是減的時候，變更的能力 === 0 不做
    if (
      (count === 1 && remainPoint === 0) ||
      (count === -1 && remainPoint === maxPoint) ||
      (count === -1 && hero[key] === 0)
    )
      return
    //#endregion

    setHeroData(({ remainPoint, hero }) => {
      return { remainPoint: remainPoint - count, hero: { ...hero, [key]: hero[key] + count } }
    })
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
        <button onClick={handleSave}>儲存</button>
      </aside>
    </section>
  )
}

export default Profile
