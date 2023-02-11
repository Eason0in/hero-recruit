import { NavLink } from 'react-router-dom'
import { CardLi } from './styleds'

const Card = ({ id, image, name }) => (
  <CardLi>
    <NavLink to={`${id}`}>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
    </NavLink>
  </CardLi>
)

export default Card
