import React from 'react'
import {useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from "leaflet";

const AddMap = ({location}) => {

  const [position, setPosition] = useState(null)

  const map = useMap();

    
  return (
    <MapContainer center={position} zoom={12}scrollWheelZoom={false}>

    {<Marker
          position={[
            position[0],        // latitude
            position[1]         // longitude
          ]}
          />}

      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default AddMap