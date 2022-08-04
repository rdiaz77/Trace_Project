import React from 'react';
import { GoogleMap, LoadScript, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState } from 'react';


// Get user coordinates
 function getCoords(){
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve,reject);

    })
  return [pos.coords.latitude, pos.coords.longitude]
 }


//  coords: GeolocationCoordinates {latitude: 43.0754208, longitude: -89.5020061, altitude: null, accuracy: 18.536, altitudeAccuracy: null, …}

console.log(getCoords())

//Feed Google Maps
const containerStyle = {
    width: '100vh',
    height: '80vh'
  };
  
  const center = {
    lat: 43.075460 ,
    lng: -89.502022
  };

export default function MyMap(){
    const [map, setMap] = useState(null)

    return(
        <LoadScript
      googleMapsApiKey=""
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={{
            streetViewControl: false,
            mapTypeControl: false,

        }}
        onLoad={map=>setMap(map)}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center}/>
      </GoogleMap>

    </LoadScript>
       
    )
}