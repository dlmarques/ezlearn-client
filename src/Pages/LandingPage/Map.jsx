import React from 'react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: "450px",
    height: "450px",
    borderRadius: "20px",
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  

const Map = () => {
  return (
    <>



      <LoadScript googleMapsApiKey="AAIzaSyANkojt7xT073BbKqV4GUbWU8tumN695pI">

                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                      ></GoogleMap>
                    </LoadScript>
    </>
  )
}

export default Map


