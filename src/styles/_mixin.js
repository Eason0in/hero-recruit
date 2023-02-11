import styled from 'styled-components'

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

export { container }
