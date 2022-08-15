import React, {useEffect, useState} from 'react';
import {GoogleMap, Marker, InfoWindow, useJsApiLoader} from '@react-google-maps/api'
import Button from '@mui/material/Button'




export default function MapAPI(){

//  GEOLOCATION API

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  

  
    async function getCoords(){
      let pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    
    let coordinates = await pos
    coordinates = [ pos.coords.latitude, pos.coords.longitude,]    
    console.log('thi is the center I am getting:', coordinates)
    return coordinates
      
    }    

getCoords()


async function userPos(coordinates){
  const coord = await coordinates
  console.log(' this is the length from usePos fc', coord.length)

  console.log('this is the coords from userPos', coord)

}
userPos(getCoords())
  
// ----------------------------------
                                                           
  

  
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