import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from 'store/createStore';
import ThemeWrapper from 'theme/ThemeWrapper';
import { Routes } from 'components';

const App = () => (
  <Provider store={store}>
    <ThemeWrapper>
      <BrowserRouter>
        <Route path="/:language(en|fr|nl)?">
          <Routes />
        </Route>
      </BrowserRouter>
    </ThemeWrapper>
  </Provider>
);

export default App;
