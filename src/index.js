import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from './routes'
import GlobalStyle from './globalStyle'



ReactDOM.render(
  <React.StrictMode>
    <Rotas />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

