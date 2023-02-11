import styled from 'styled-components'
import { HERO_DARK } from '../../styles/_variables'

const Section = styled.section`
  display: flex;
  padding: 5vh 2vw;
  border: 1px ${HERO_DARK} solid;
  column-gap: 5px;

  @media (min-width: 992px) {
    padding: 5vh 6vw;
  }
`

export { Section }
