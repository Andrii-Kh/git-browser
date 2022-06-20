import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/main.scss'

const Header = (props) => {
  if (props.repositoryName) {
    return (
      <div className="header">
        <div id="user-name">User name: {props.userName}</div>
        <div id="repository-name">Repository name: {props.repositoryName}</div>
        <div id="go-repository-list" className="link">
          <Link to={`/${props.userName}`}>Go back to repository list</Link>
        </div>
        <div id="go-back" className="link">
          <Link to="/">Go back</Link>
        </div>
      </div>
    )
  }
  return (
    <div className="header">
      <div id="user-name">User name: {props.userName}</div>
      <div id="go-back" className="link">
        <Link to="/">Go back</Link>
      </div>
    </div>
  )
}

export default Header
