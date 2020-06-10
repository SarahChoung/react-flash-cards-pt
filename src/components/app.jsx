import React, { createContext } from 'react';
import ViewCards from './view-cards';
import Review from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
import {AppContext} from './app-context';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards'
    }
  }

  setView(viewState) {
    this.setState({
      view: viewState
    })
  }

  getView() {
    switch(this.state.view) {
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
        <AppContext.Provider value={this.setView}>
          <Nav />
        </AppContext.Provider>
        <div className = "text-center">
          {this.getView()}
        </div>
      </div>

    );
  }
}

export default App
