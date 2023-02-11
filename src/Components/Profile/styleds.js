import styled from 'styled-components'
import { HERO_DARK } from '../../styles/_variables'

const Section = styled.section`
  display: flex;
  padding: 5vh 2vw;
  border: 1px ${HERO_DARK} solid;
  column-gap: 5px;
  article {
    width: 70%;
    ul {
      display: grid;
      row-gap: 5vh;
      li {
        display: inline-flex;
        align-items: center;
        justify-content: space-evenly;

        .counter {
          display: inline-flex;
          column-gap: 2vw;
          font-size: 1.2rem;
          align-items: center;
          p {
            width: 20px;
            text-align: center;
          }
          button {
            width: 30px;
            height: 30px;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  aside {
    width: 30%;
    align-self: flex-end;
    display: grid;
    row-gap: 3vh;
    button {
      border-radius: 5px;
      border: 1px solid ${HERO_DARK};
    }
  }

  @media (min-width: 992px) {
    padding: 5vh 6vw;
    article {
      width: 60%;
      ul {
        width: 50%;
      }
    }
    aside {
      width: 40%;
      button {
        width: 60%;
        font-size: 1.2rem;
      }
    }
  }
`

export { Section }
