import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import loginbg from '../../Data/loginbg.jpg'
import logo from '../../Data/logo (2).png'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errMsg: false,
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = () => {
    console.log('entered')
    this.setState({errMsg: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const fetchedData = await fetch(url, options)
    const data = await fetchedData.json()
    if (fetchedData.ok === true) {
      event.target.reset()
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure()
    }
  }

  render() {
    const {errMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginPage">
        <div className="loginCardPosition">
          <img
            src="https://res.cloudinary.com/debzhajy6/image/upload/v1665476037/Rectangle_1457_1_mzmfhn.png"
            alt="mobile-website-bg"
            className="mobile-website-bg"
          />
          <div className="loginCard">
            <img src={logo} alt="website logo" className="website-logo" />
            <h1 className="heading">Tasty Kitchens</h1>
            <h1 className="loginHeading">Login</h1>
            <form onSubmit={this.submitForm}>
              <label htmlFor="input" className="labels">
                USERNAME
              </label>
              <br />
              <input
                id="input"
                type="text"
                className="inputBox"
                placeholder="rahul"
                onChange={this.getUsername}
              />
              <br />
              <label htmlFor="password" className="labels">
                PASSWORD
              </label>
              <br />
              <input
                id="password"
                type="password"
                className="inputBox"
                placeholder="rahul@2021"
                onChange={this.getPassword}
              />
              <br />
              {errMsg && (
                <p className="errorMsg">
                  Please enter a valid Username & Password
                </p>
              )}
              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
        </div>
        <div>
          <img src={loginbg} alt="website login" className="loginpageBg" />
        </div>
      </div>
    )
  }
}

export default Login
