/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppRoutes from './src/routes/AppRoutes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/redux/store';



function App(): JSX.Element {
  

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
     
     </Provider>
      
  );
}



export default App;
