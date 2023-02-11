import styled from 'styled-components'
import { container } from '../../styles/_mixin'

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
    }
  }
`

export { Container }
