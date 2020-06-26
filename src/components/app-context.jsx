import React from 'react';

export const AppContext = React.createContext({
  viewState: null,
  setView: () => {},
});
