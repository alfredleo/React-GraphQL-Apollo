
import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3000' }),
  cache: new InMemoryCache(),
});


const ChannelsList = () => (
  <ul className="Item-list">
    <li>Channel 1</li>
    <li>Channel 2</li>
  </ul>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Apollo</h2>
        </div>
          <ChannelsList />
      </div>
    );
  }
}

export default App;
