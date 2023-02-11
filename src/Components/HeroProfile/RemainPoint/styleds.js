import styled from 'styled-components'
import { HERO_DARK } from '../../../styles/_variables'

const Aside = styled.aside`
  width: 30%;
  align-self: flex-end;
  display: grid;
  row-gap: 3vh;
  button {
    border-radius: 5px;
    border: 1px solid ${HERO_DARK};
  }

  @media (min-width: 992px) {
    width: 40%;
    button {
      width: 60%;
      font-size: 1.2rem;
    }
  }
`

export { Aside }
