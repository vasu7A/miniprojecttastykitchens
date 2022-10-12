import {Link} from 'react-router-dom'
import NavBar from '../NavBar'
import error from '../../Data/erroring1.png'
import './index.css'

const PageNotFound = () => (
  <>
    <NavBar />
    <div className="not-found-container">
      <img src={error} alt="not found" className="not-found-image" />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-text">
        we are sorry, the page you requested could not be found <br /> Please go
        back to the homepage
      </p>
      <Link to="/">
        <button type="button" className="home-btn">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default PageNotFound
