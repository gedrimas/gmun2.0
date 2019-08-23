import React from 'react';
import { Subscription } from 'react-apollo'
import { gql } from 'apollo-boost'
import './index.css';

const SUBS = gql`
   subscription {
      countDown(start: 10)
  }`


export default function TestGraphqlSub(){
  
  return (
    <>
    <h1>TEST GRAPHQL SUBSCRIPTIONS</h1>
     <Subscription subscription={SUBS}>
       {
        ({ data, loading }) => loading ?
        <p>Loading testing subscription</p> :
        <p>subscription return: {data.countDown}</p>
        
      }
    </Subscription>
    </>
  )
}


    
    