import styled from 'styled-components'
import { routeNavLink } from '../../../../styles/_mixin'

const CardNavLink = styled(routeNavLink)`
  border-radius: 10px;
  border: 1px rgba(0, 0, 0, 0.65) solid;
  overflow: hidden;

  .name {
    padding: 20px 30px;
  }
`

export { CardNavLink }
