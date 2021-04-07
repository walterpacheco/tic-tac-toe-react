//React
import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asest/index.css';



//Javascript
import 'jquery';
//import 'bootstrap'; 
//import 'popper.js';  

//Components
import Home from './components/home';


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

