import { Outlet } from 'react-router-dom'
import CardList from './CardList'
import { Container } from './styleds'

const HeroList = () => {
  return (
    <Container>
      <CardList />
      <Outlet />
    </Container>
  )
}

export default HeroList
