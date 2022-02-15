import React from 'react';
import ReactDOM from 'react-dom';

// Configs
import reportWebVitals from './config/reportWebVitals';

// Styles and Scripts
import './styles/index.css';

// Components
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
