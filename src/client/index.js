import 'react-hot-loader/patch'
import React from 'react';
import ReactDOM  from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from './app'


const render = Component => (
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>, 
    document.getElementById('root')
))

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextRootContainer = require('./app').default;
    render(<NextRootContainer/>, document.getElementById('root'))
  })
}

