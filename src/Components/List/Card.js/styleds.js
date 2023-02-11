import styled from 'styled-components'
import { HERO_GREEN } from '../../../styles/_variables'

const CardLi = styled.li`
  a {
    border-radius: 10px;
    border: 1px rgba(0, 0, 0, 0.65) solid;
    overflow: hidden;
    display: block;
    text-decoration: none;
    color: #222;

    &:hover,
    &.active {
      color: ${HERO_GREEN};
      border-color: ${HERO_GREEN};
    }

    .name {
      padding: 20px 30px;
    }

    .image {
      overflow: hidden;
    }
  }
`

export { CardLi }
