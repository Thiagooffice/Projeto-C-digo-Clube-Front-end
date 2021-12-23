import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import GlobalStyle from './globalStyle'
import Users from './pages/Users'


ReactDOM.render(
  <React.StrictMode>
    <Users />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

