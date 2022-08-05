import React from 'react';
import { GoogleMap, LoadScript, useJsApiLoader, Marker } from '@react-google-maps/api';



                                                 
// Get the user's coordinates:    



const center = {
    lat: 43.075460 ,
    lng: -89.502022
  };


//Feed Google Maps
const containerStyle = {
    width: '100vh',
    height: '80vh'
  };
  
  

export default function MyMap(){

  
    return(
        <LoadScript
      googleMapsApiKey= {process.env.KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={{
            streetViewControl: false,
            mapTypeControl: false,

        }}
      >
        <Marker position={center}/>
        { /* Child components, such as markers, info windows, etc. */ }
        
      </GoogleMap>

    </LoadScript>
       
    )
}