'use client'

import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'
import Image from 'next/image'

const defaultPosition: [number, number] = [51.505, -0.09]

function MapApp() {
    const icon: Icon = new Icon({
        iconUrl: "marker.svg",
        iconSize: [25,41],
        iconAnchor: [12, 41],
    });

  return (
    <div className='content'>
      <div className='flex flex-col w-full h-full'>
            <div className='h-12'></div>
          <MapContainer center={defaultPosition} zoom={13} className='map-container'>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={defaultPosition} icon={icon}>
            
            <Popup >
              A pretty CSS3. <br /> Easily blala
            </Popup>
          </Marker>
        </MapContainer>
        
      </div>
    </div>
  )
}

export default MapApp