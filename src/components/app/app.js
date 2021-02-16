import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import {SwapiServiceProvider} from '../swapi-service-context';
import { PlanetPage, PeoplePage, StarshipPage, LoginPage, SecretPage } from '../pages';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './app.css';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>

          <Router>
            <div className="stardb-app">
            <Header />
            <RandomPlanet />
            <Switch>
                <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact/>
                <Route path='/people/:id?' component={PeoplePage}/> 
                <Route path='/planets/' component={PlanetPage}/>
                <Route path='/starships/' exact component={StarshipPage}/>
                <Route path='/starships/:id' render={({match}) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id}/>
                }}/>
                <Route path='/secret' render={() => <SecretPage isLoggedIn={this.state.isLoggedIn}/>}/>
                <Route 
                  path='/login' 
                  render={() => (
                    <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin}/>
                  )}/>
                  <Route render={() => <h2>Page not found</h2>}/>
            </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}