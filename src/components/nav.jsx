import React from 'react';
import { AppContext } from './app-context'

function Nav() {
  return (
    <AppContext.Consumer>
      {({viewState, setView})=> (
        <nav className="navbar">
          <div className="nav navbar-right ml-auto">
            <button
              onClick={setView}
              className="btn btn-link">
              View Cards</button>
            <button
              onClick={setView}
              className="btn btn-link">
              Review</button>
            <button
              onClick={setView}
              className="btn btn-link">
              Create Card</button>
          </div>
        </nav>
      )}
    </AppContext.Consumer>
  )
}

export default Nav
