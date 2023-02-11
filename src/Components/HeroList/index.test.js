import { render, screen } from '@testing-library/react'
import HeroList from './index'

test('renders learn react link', () => {
  render(<HeroList />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
