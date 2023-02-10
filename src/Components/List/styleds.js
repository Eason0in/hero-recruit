import styled from 'styled-components'
import { container } from '../../style/_mixin'
import { HERO_GREEN } from '../../style/_variables'

const Container = styled(container)`
  margin: 70px auto;
  box-sizing: border-box;
  nav {
    margin-bottom: 50px;
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      row-gap: 10px;
      li {
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
      }
    }
  }
`

export { Container }