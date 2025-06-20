// App.js
import React from 'react';


import AppNavigator from './src/Navigation/AppNavigator';
import { Provider } from 'react-redux';
import Home from './src/Screens/Home';
import store from './src/redux/store';

const App = () => {
  return (
    
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
   
  );
};

export default App;
