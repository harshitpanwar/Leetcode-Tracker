import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'

// const store = createStore(reducers, compose(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
