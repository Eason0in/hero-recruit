import { useState, useEffect } from 'react'
import Card from './Card'
import { CardListNav } from './styleds'

const CardList = () => {
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
    <CardListNav>
      <ul>
        {listData.map(({ id, image, name }) => (
          <Card key={id} id={id} image={image} name={name} />
        ))}
      </ul>
    </CardListNav>
  )
}

export default CardList
