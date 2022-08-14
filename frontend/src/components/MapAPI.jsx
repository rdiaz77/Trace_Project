import React, {useEffect, useState} from 'react';
import {GoogleMap, Marker, InfoWindow, useJsApiLoader} from '@react-google-maps/api'
import Button from '@mui/material/Button'








export default function MapAPI(){

//  GEOLOCATION API

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect( ()=>{
    async function getCoords(){
      let pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
    }
   console.log(getCoords())
                      
  },[])

  // Build Ad 2                                                             
  function buildAd2(coordinates){
  const coords = coordinates
  const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
}

console.log(buildAd2)




                                                           



  



 
  
 

  

  
  //GOOGLE MAP

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
  })
if(!isLoaded) return <div>Loading....</div>


  // Map settings

  const containerStyle = {
    width: '80vh',
    height: '80vh'
  }
  const center = {
    lat: 43.075,
    lng: -89.50

  }
  const opts={
    disableDefaultUI: true,
    zoonControl: true
  }
  const zoom = 10

function CreateMap(){
  return (

    <GoogleMap
    mapContainerStyle={containerStyle}
    options={opts}
    center={center}
    zoom={zoom}
    
    >
      <Marker position={center}/>


    </GoogleMap>

  )
}

  return(


    <div>

      <CreateMap  />
      <Button >Get Position</Button>


    


    </div>
  )



}