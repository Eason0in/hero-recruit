import styled from 'styled-components'
import { container, routeNavLink } from '../../styles/_mixin'
import { HERO_DARK } from '../../styles/_variables'

const Container = styled(container)`
  margin: 200px auto;
  box-sizing: border-box;
  text-align: center;
`

const BackNavLink = styled(routeNavLink)`
  display: inline-block;
  margin-top: 50px;
  font-size: 16px;
  border: 1px solid ${HERO_DARK};
  padding: 10px 20px;
  border-radius: 10px;
`

export { Container, BackNavLink }
