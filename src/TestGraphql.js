/* import React from 'react';
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import './index.css';



export default function TestGraphql(){
  
  const client = new ApolloClient({
    uri:'http://192.168.21.117:8080/graphql/',
    request: operation => {
      operation.setContext({
        headers: {
          "content-type": "application/json",
        }
      });
    }
  })
  
  const query = gql`
  {
    hello
  }
  
  `
  
  client.query({query})
  .then(({ data }) => console.log('data', data))
  .catch(console.error)

  return (
    <h1>TEST GRAPHQL SIMPLE QUERY</h1>
  )
} */


    
    