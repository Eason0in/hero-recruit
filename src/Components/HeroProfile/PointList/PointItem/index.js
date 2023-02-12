import { Li } from './styleds'

const PointItem = ({ pointK, pointV, changeHeroData }) => {
  return (
    <Li>
      <strong>{pointK.toUpperCase()}</strong>
      <div className="counter">
        <button className="plus" onClick={() => changeHeroData(pointK, 1)} data-test="plus">
          +
        </button>
        <p data-test="pointV">{pointV}</p>
        <button className="sub" onClick={() => changeHeroData(pointK, -1)} data-test="sub">
          -
        </button>
      </div>
    </Li>
  )
}

export default PointItem
