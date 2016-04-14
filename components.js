import React, {Component, PropTypes} from 'react';

//Example of stateless component
//this component can't use shouldcomponentupdate, proptypes
//instead it should use memoization, but it is beyond basic setup
export function StatelessComponent(props) {
  return <div>Hello {props.name}</div>;
}

//Classic ES6 component 
export class Es6Component extends Component {
  static propTypes() {
    return {
      name: PropTypes.string
    };
  }
  
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

//Note in most cases 1 component per file