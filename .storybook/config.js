/* eslint-disable */
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import ThemeWrapper from 'theme/ThemeWrapper';
import { Provider } from 'react-redux';
import store from 'store/createStore';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addDecorator(story => <Provider store={store}><ThemeWrapper>{story()}</ThemeWrapper></Provider>);