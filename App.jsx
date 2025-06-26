// App.js
import React from 'react';

import AppNavigator from './src/Navigation/AppNavigator';
import {Provider} from 'react-redux';
import Home from './src/Screens/Home';
import store from './src/redux/store';

import QrHome from './src/Screens/QrHome';
import Scanner from './src/Screens/Scanner';
import Main from './src/Screens/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
};

export default App;
 