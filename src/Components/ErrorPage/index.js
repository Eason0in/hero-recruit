import { Container, BackNavLink } from './styleds'

const ErrorPage = () => {
  return (
    <Container>
      <h1>Error Page</h1>
      <BackNavLink to="/heroes">回 Heroes 頁</BackNavLink>
    </Container>
  )
}

export default ErrorPage
