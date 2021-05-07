import React from 'react'
import ReactDOM from 'react-dom'
// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://instachris-server.vercel.app/graphql',
  cache: new InMemoryCache()
})
// ReactDOM.render(<h1>Hola Pacheco</h1>, document.getElementById('app'))
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
