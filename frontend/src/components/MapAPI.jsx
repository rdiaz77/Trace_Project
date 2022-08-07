import React, { useState } from 'react';
import { GoogleMap, LoadScript, useJsApiLoader, Marker } from '@react-google-maps/api';



  const MapAPI = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
  
  const centers = {
    lat:{lat} ,
      lng: {lng}
  };
  
  const center = {
    lat:43.075 ,
      lng: -89.50
  };
console.log(centers.lat)
console.log(centers.lng)
  
const containerStyle = {
  width: '100vh',
  height: '80vh'
};

 
  return (
    <div> 
      <div className="App">
        <button onClick={getLocation}>Get Location</button>
        <h1>Coordinates</h1>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
      </div>

  
    <LoadScript
    googleMapsApiKey= ""
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
    
      { /* Child components, such as markers, info windows, etc. */ }
      
    </GoogleMap>

    </LoadScript>
    </div>
  );
}

export default MapAPI;