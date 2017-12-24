import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import {Provider} from 'react-redux';

import store from './store'

import './index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store}>
  <Dashboard/>
</Provider>, document.getElementById('root'));
// registerServiceWorker();
