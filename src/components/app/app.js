import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import {SwapiServiceProvider} from '../swapi-service-context';
import { PlanetPage, PeoplePage, StarshipPage } from '../pages';
import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />

          <RandomPlanet />

          <PeoplePage/>

          <PlanetPage/>

          <StarshipPage/>
          
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}