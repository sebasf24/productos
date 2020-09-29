import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import ProductsContainer from './components/Containers/ProductsContainer';

function App() {
  return (
    <Provider store={store}>
      <ProductsContainer></ProductsContainer>
    </Provider>
  );
}

export default App;
