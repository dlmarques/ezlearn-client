import React from "react";
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
      <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    </>
  );
};

export default Map;
