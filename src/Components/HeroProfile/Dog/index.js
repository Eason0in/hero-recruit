import { DogDiv, DogSpan, DogP } from './styleds'

const Dog = ({ maxPoint }) => {
  return (
    <DogDiv>
      <DogSpan />
      <DogP>這位英雄的最大能力值為：{maxPoint}</DogP>
    </DogDiv>
  )
}

export default Dog
