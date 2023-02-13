import { DogDiv, DogSpan, DogP } from './styleds'

const Dog = ({ maxPoint }) => {
  return (
    <DogDiv data-test="dog-div">
      <DogSpan />
      <DogP data-test="dog-p">這位英雄的最大能力值為：{maxPoint}</DogP>
    </DogDiv>
  )
}

export default Dog
