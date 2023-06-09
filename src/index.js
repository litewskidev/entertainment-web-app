import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './styles/global.scss';
import './styles/settings.scss';
import './styles/typography.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter basename='/entertainment-web-app'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  //</React.StrictMode>
);
