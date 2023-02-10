import { redirect } from 'react-router-dom'

export default function loader() {
  return redirect('/heroes')
}
