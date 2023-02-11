import { Li } from './styleds'

const PointItem = ({ pointK, pointV, changeHeroData }) => {
  return (
    <Li>
      <strong>{pointK.toUpperCase()}</strong>
      <div className="counter">
        <button className="plus" onClick={() => changeHeroData(pointK, 1)}>
          +
        </button>
        <p>{pointV}</p>
        <button className="sub" onClick={() => changeHeroData(pointK, -1)}>
          -
        </button>
      </div>
    </Li>
  )
}

export default PointItem
