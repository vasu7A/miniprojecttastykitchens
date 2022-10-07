import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NavBar from '../NavBar'
import Slick from '../Slick'
import Restaurants from '../Restaurants'
import Footer from '../Footer'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <NavBar />
      <div className="home-container">
        <Slick />
        <Restaurants />
      </div>
      <Footer />
    </>
  )
}

export default Home
