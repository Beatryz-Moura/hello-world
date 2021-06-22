import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App person={person} />
  </React.StrictMode>,
  document.getElementById('root')
);

const person = { name: 'beatryz', lastname: 'moura' };

reportWebVitals();
