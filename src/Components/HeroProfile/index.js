import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PointList from './PointList'
import RemainPointAndBtn from './RemainPointAndBtn'
import Dog from './Dog'
import { Section } from './styleds'

const initData = { remainPoint: 0, hero: { str: 0, int: 0, agi: 0, luk: 0 } }

const getHeroSumPoint = (data) => Object.values(data).reduce((sum, cur) => (sum += cur), 0)

const Profile = () => {
  const { heroId } = useParams()
  const [heroData, setHeroData] = useState(initData)
  const [maxPoint, setMaxPoint] = useState(0)

  useEffect(() => {
    fetch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        setHeroData(() => ({ remainPoint: 0, hero: data }))
        setMaxPoint(getHeroSumPoint(data))
      })
      .catch((err) => {
        //#region  將資料恢復預設值
        setHeroData(initData)
        setMaxPoint(0)
        //#endregion

        console.error('err', err)
      })
  }, [heroId])

  return (
    <Section>
      <Dog maxPoint={maxPoint} />
      <PointList heroState={[heroData, setHeroData]} />
      <RemainPointAndBtn getHeroSumPoint={getHeroSumPoint} heroData={heroData} maxPoint={maxPoint} />
    </Section>
  )
}

export default Profile
