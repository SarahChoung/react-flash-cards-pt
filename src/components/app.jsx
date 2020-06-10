import React, { createContext } from 'react';
import ViewCards from './view-cards';
import Review from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
// import {AppContext} from './app-context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards'
    }
    this.setView = this.setView.bind(this)
    this.getView = this.getView.bind(this)

  }

  setView(event) {
    const buttonName = event.target.textContent
    let viewState = null;
    switch (buttonName) {
      case 'Create Card':
        viewState = 'create-card';
        break
      case 'Review':
        viewState = 'review-cards';
        break
      case 'View Cards':
        viewState = 'view-cards'
        break
    }
    this.setState({
      view: viewState
    })
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard />;
      case 'review-cards':
        return <Review />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }

  }

  render() {
    return (
      <div>
        <Nav setView = {this.setView}/>
        <div className="text-center">
          {this.getView()}
        </div>
      </div>

    );
  }
}

export default App
