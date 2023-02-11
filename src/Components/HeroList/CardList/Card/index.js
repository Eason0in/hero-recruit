import { CardNavLink } from './styleds'

const Card = ({ id, image, name }) => (
  <li>
    <CardNavLink to={`${id}`}>
      <img src={image} alt={name} />
      <div className="name">
        <p>{name}</p>
      </div>
    </CardNavLink>
  </li>
)

export default Card
