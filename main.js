import React from 'react';
import ReactDOM from 'react-dom';

import {Es6Component, StatelessComponent} from './components.js'

const App = (props) => 

function StatelessApp(props) {
  return <div>Hello {props.name} this component don't use shouldcomponentupdate</div>;
}

ReactDOM.render(
  <div>
    <h1>Hello, world! Ahoj Aleši ;-)
      <br /><small>Tak to máš pěkně nasetupované ;-)</small>
    </h1>
    <Es6Component name='Petr' />
    <StatelessComponent name='Petr' />
  </div>,
  document.getElementById('example')
);