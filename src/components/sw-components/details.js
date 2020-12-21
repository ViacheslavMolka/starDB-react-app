import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import {SwapiServiceConsumer} from '../swapi-service-context';


const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return(
                        <ItemDetails 
                            getData={getPerson} 
                            itemId={itemId} 
                            getImageUrl={getPersonImage}>

                            <Record field={"gender"} label={"Gender"}/>  
                            <Record field={"eyeColor"} label={"Eye Color"}/> 

                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>    
    )
};

const PlanetDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return(
                        <ItemDetails 
                            getData={getPlanet} 
                            itemId={itemId}
                            getImageUrl={getPlanetImage}>
                        
                            <Record field={"population"} label={"Population"}/>  
                            <Record field={"rotationPeriod"} label={"Rotation Period"}/>
                            <Record field={"diameter"} label={"Diameter"}/>
                        
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    )
};

const StarshipDetails = ({itemId}) => {
    return(
        <SwapiServiceConsumer>
        {
            ({getStarship, getStarshipImage}) => {
                return(
                    <ItemDetails 
                        getData={getStarship} 
                        itemId={itemId}
                        getImageUrl={getStarshipImage}>
                    
                        <Record field={"model"} label={"Model"}/>  
                        <Record field={"crew"} label={"Starship Crew"}/>
                        <Record field={"costInCredits"} label={"Cost"}/>
    
                    </ItemDetails>    
                );
            }
        }
        </SwapiServiceConsumer>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};