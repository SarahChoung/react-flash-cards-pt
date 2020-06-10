import React from 'react';
import { AppContext } from './app-context'

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="nav navbar-right ml-auto">
        <button
          onClick={props.setView}
          className="btn btn-link">
          View Cards</button>
        <button
          onClick={props.setView}
          className="btn btn-link">
          Review</button>
        <button
          onClick={props.setView}
          className="btn btn-link">
          Create Card</button>
      </div>
    </nav>
  )
}

export default Nav
