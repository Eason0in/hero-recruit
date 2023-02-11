import { Article } from './styleds'
import PointItem from './PointItem'

const PointList = ({ heroState }) => {
  const [heroData, setHeroData] = heroState
  const { remainPoint, hero } = heroData

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
    <Article>
      <ul>
        {Object.entries(hero).map(([key, value]) => (
          <PointItem key={key} pointK={key} pointV={value} changeHeroData={changeHeroData} />
        ))}
      </ul>
    </Article>
  )
}

export default PointList
