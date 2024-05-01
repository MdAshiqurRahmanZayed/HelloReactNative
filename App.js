import React from 'react';
import MainComponent from './src/MainComponent';
import { Provider } from 'react-redux';
import Store from './src/redux/store';

export default function App() {
  return (
    <Provider store={Store}>
      <MainComponent />
    </Provider>
  );
}


