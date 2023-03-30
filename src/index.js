import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// CSS
import './css/bootstrap.min.css';
// import './css/all.min.css';
import './css/style.css';
import './css/responsive.css';
// Component
import Header from './Header';
import Main from './main';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
