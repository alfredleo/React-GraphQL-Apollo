
import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:3000' }),
  cache: new InMemoryCache(),
});

const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;

 const ChannelsList = ({ data: {loading, error, channels }}) => {
    if (loading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    return <ul>
      { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
    </ul>;
  };

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);



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
