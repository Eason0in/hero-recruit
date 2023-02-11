import styled from 'styled-components'
import { HERO_GREEN } from '../../../styles/_variables'

const DogSpan = styled.span`
  background-image: url('/dog.png');
  display: inline-block;
  width: 33px;
  height: 24px;
  background-size: 33px 41px;
  background-repeat: no-repeat;
  transition: top 85ms ease-in, height 85ms ease-in;
`

const DogP = styled.p`
  display: none;
  transition: display 85ms ease-in;
  align-self: center;
`

const DogDiv = styled.div`
  position: absolute;
  top: -25px;
  left: 10px;
  transition: top 85ms ease-in, height 85ms ease-in;
  color: ${HERO_GREEN};
  display: inline-flex;

  &:hover {
    cursor: pointer;
    top: -38px;
  }

  &:hover ${DogSpan} {
    height: 41px;
  }

  &:hover ${DogP} {
    display: block;
  }
`

export { DogDiv, DogSpan, DogP }
