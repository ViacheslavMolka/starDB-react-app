import React, { Component } from 'react';
import {PersonDetails, PersonList} from '../sw-components';
import Row from '../row/row';


export default class PeoplePage extends Component {

    state = {
        selectedItem: 1
    };

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    };

    render() {
        return(
            <Row 
             left={<PersonList onItemSelected={this.onItemSelected}/>} 
             rigth={<PersonDetails itemId={this.state.selectedItem}/>}/>
        );
    }
}