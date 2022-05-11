import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  //app is the root component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //the html "root" update in here. 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
