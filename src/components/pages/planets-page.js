import React, { Component } from 'react';
import {PlanetDetails, PlanetList} from '../sw-components';
import Row from '../row/row';


export default class PlanetPage extends Component {

    state = {
        selectedItem: 2
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        return(
            <Row 
             left={<PlanetList onItemSelected={this.onItemSelected}/>} 
             rigth={<PlanetDetails itemId={this.state.selectedItem}/>}/>
        );
    }
}