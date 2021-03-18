import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import Covid from './Covid';
import Login from './Login';
//import Signin from './Signin';
//import Abc from './Abc';
import Registration from './Registration';
//import Safety from './Safety';
import Helpline from './Helpline';
import Testcenter from './Testcenter';
import Haryana from './Haryana';
//import Axi1 from './Axi1';
import Guard from './Guard';
import Axidisp from './Axidisp';
//import Checker1 from './Checker1';
import Checker from './Checker';
import Stats from './Stats';
import Routing from './Routing';
//import Checker3 from './Checker3';

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
