import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Abt from './Abt.js';
import Code from './Code.js';
import './hole.css';
import Nav from './Nav.js';
import Train from './Train.js';
import Next from './Next.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    <App />
   <Abt />
   <Code />
   <Nav />
   <Train/>
   <Next/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
