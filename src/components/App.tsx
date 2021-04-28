import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';
import RepositoriesList from './RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
