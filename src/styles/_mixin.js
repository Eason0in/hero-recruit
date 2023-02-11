import styled from 'styled-components'
import { HERO_GREEN } from './_variables'

import { NavLink } from 'react-router-dom'

const container = styled.main`
  width: 280px;
  @media (min-width: 768px) {
    width: 760px;
  }

  @media (min-width: 992px) {
    width: 990px;
  }

  @media (min-width: 1100px) {
    width: 1100px;
  }
`

const routeNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #222;

  &:hover,
  &.active {
    color: ${HERO_GREEN};
    border-color: ${HERO_GREEN};
  }
`

export { container, routeNavLink }
