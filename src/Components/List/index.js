import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Card from './Card.js'
import { Container } from './styleds'

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
    <Container>
      <nav>
        <ul>
          {listData.map(({ id, image, name }) => (
            <Card key={id} id={id} image={image} name={name} />
          ))}
        </ul>
      </nav>
      <Outlet />
    </Container>
  )
}

export default List
