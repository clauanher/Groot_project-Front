import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const Root = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    <h1>Footer</h1>
      </div>
  )
}

export default Root