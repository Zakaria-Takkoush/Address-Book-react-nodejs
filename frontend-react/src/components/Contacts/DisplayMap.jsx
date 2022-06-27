import React from 'react'
import {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";

const DisplayMap = ({location}) => {

const [activePark, setActivePark] = useState(null);
    // console.log(location.coordinates);
    
  return (
    <MapContainer center={[location.coordinates[0], location.coordinates[1]]} zoom={12}scrollWheelZoom={false}>

    {<Marker
          position={[
            location.coordinates[0],        // latitude
            location.coordinates[1]         // longitude
          ]}
          />}

      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default DisplayMap