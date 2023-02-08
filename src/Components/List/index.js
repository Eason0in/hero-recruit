import { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './index.scss'

function List() {
  const [listData, setListData] = useState([])

  //#region useEffect 非同步 api 要資料
  useEffect(() => {
    fetch('https://hahow-recruit.herokuapp.com/heroes')
      .then((res) => res.json())
      .then((data) => {
        setListData(data)
      })
  }, [])

  //#endregion
  return (
    <main className="container">
      <nav>
        <ul>
          {listData.map(({ id, image, name }) => (
            <li key={id}>
              <NavLink to={`${id}`}>
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <div className="name">
                  <p>{name}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </main>
  )
}

export default List
