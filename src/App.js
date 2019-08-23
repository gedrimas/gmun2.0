import React, {Component} from 'react';
import logo from './logo.svg';
import { gql } from 'apollo-boost'
import { withApollo } from 'react-apollo'

import './App.css';
//import TestGraphql from './TestGraphql'
import TestGraphqlSub from './TestGraphqlSub'

const SUBS = gql`
   subscription {
      countDown(start: 10)
    }
`

class App extends Component {

  componentDidMount(){
    let { client } = this.props
    client.subscribe({ query: SUBS }).subscribe(({ data }) => {
      console.log('DATA', data)
    }
    )
  }

  render(){
    return (
      <div className="App">
        {/* <TestGraphql /> */}
        <TestGraphqlSub />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withApollo(App);
