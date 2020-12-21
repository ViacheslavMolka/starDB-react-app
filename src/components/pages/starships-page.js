import React, { Component } from 'react';
import {StarshipDetails, StarshipList} from '../sw-components';
import Row from '../row/row';


export default class StarshipPage extends Component {

    state = {
        selectedItem: 10
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        return(
            <Row 
             left={<StarshipList onItemSelected={this.onItemSelected}/>} 
             rigth={<StarshipDetails itemId={this.state.selectedItem}/>}/>
        );
    }
}