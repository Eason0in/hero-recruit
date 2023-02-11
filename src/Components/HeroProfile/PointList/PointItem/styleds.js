import styled from 'styled-components'

const Li = styled.li`
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
`

export { Li }
