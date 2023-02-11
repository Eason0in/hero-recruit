import { Container, BackNavLink } from './styleds'

const ErrorPage = () => {
  return (
    <Container data-test="error-page">
      <h1>Error Page</h1>
      <BackNavLink to="/heroes" data-test="back-heroes-link">
        回 Heroes 頁
      </BackNavLink>
    </Container>
  )
}

export default ErrorPage
