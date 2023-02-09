import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'

function Profile() {
  const { heroId } = useParams()

  useEffect(() => {
    console.log('heroId', heroId)
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

  return (
    <section>
      <article>
        <ul>
          <li>
            <strong>STR</strong>
            <div className="counter">
              <button className="plus">+</button>
              <p>0</p>
              <button className="sub">-</button>
            </div>
          </li>
          <li>
            <strong>ABC</strong>
            <div className="counter">
              <button className="plus">+</button>
              <p>0</p>
              <button className="sub">-</button>
            </div>
          </li>
        </ul>
      </article>
      <aside>
        <label>剩餘點數： 1</label>
        <button onClick={handleSave}>儲存</button>
      </aside>
    </section>
  )
}

export default Profile
