import styled from 'styled-components'

const Article = styled.article`
  width: 70%;
  ul {
    display: grid;
    row-gap: 5vh;
  }

  @media screen and (min-width: 992px) {
    width: 60%;
    ul {
      width: 50%;
    }
  }
`

export { Article }
