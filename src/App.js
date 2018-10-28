import React, { Component } from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'react-emotion';

import Locations from './containers/Locations';
import Location from './containers/Location';

const Client = new ApolloClient({
  uri: 'http://localhost:4000',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={Client}>
        <HashRouter>
          <Switch>
            <Grid>
              <Route key="locations" path="/" component={Locations} />

              <Route key="location" path="/location/:id" component={Location} />
            </Grid>
          </Switch>
        </HashRouter>
      </ApolloProvider>
    );
  }
}

export default App;

const Grid = styled('div')`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
