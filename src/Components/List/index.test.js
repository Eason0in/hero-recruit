import { render, screen } from '@testing-library/react'
import List from './index'

test('renders learn react link', () => {
  render(<List />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
