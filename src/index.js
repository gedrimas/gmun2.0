import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache, HttpLink } from 'apollo-boost'
import {ApolloClient} from 'apollo-boost'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { WebSocketLink } from 'apollo-link-ws'
import { persistCache } from 'apollo-cache-persist' 
import './index.css';
import App from './App';

const cache = new InMemoryCache()

persistCache({
  cache,
  storage: localStorage
})

if (localStorage['apollo-cache-persist']) {
  let cacheData = JSON.parse(localStorage['apollo-cache-persist'])
  cache.restore(cacheData)
}

//uri: `https://snowtooth.moonhighway.com/`,
const httpLink = new HttpLink({
  uri: `https://grog.dev.antipsy.ru/graphql/`,
  request: operation => {
    operation.setContext({
      headers: {
        "content-type": "application/json",
      }
    });
  }
})  


const wsLink = new WebSocketLink({
  uri: `wss://grog.dev.antipsy.ru/graphql/`,
  options: {
    reconnect: true
  },
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );

const client = new ApolloClient({ cache, link })
  
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, 
  document.getElementById('root'));