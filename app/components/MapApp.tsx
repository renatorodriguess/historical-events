// Importando somente o necessário de 'leaflet'
import { Icon, IconOptions, DivIcon } from 'leaflet';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import eventsData from './HistoricalEvents';
import FlyToMarker from './FlyToMarker';
import Filter from './Filter';

// Definindo a interface HistoricalEvent
export interface HistoricalEvent {
  id: number;
  title: string;
  description: string;
  position: [number, number];
  category: string;
}

const defaultPosition: [number, number] = [51.505, -0.09];

const emptyStar = <i className='fa-regular fa-star'></i>;
const fullStar = <i className='fa-solid fa-star' style={{ color: "#fdc401" }}></i>;

function MapApp() {
  const [icon, setIcon] = useState<Icon<IconOptions> | DivIcon | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const leafletIcon = new Icon({
        iconUrl: "marker.svg",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      setIcon(leafletIcon);
    }
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeEvent, setActiveEvent] = useState<HistoricalEvent | null>(null);
  const [favorites, setFavorites] = useState<number[]>(
    () => JSON.parse(localStorage.getItem("Favorites") || "[]")
  );

  const handleFavoriteClick = (eventId: number) => {
    const updatedFavorites = favorites.includes(eventId)
      ? favorites.filter((id) => id !== eventId)
      : [eventId, ...favorites];

    setFavorites(updatedFavorites);
    localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
  };

  const handleListItemClick = (eventId: number) => {
    const event = eventsData.find((event) => event.id === eventId);

    if (event) {
      setActiveEvent(event);
    }
  };

  return (
    <div className='content'>
      <div className='map-content flex flex-col gap-6 h-full'>
        <Filter setSelectedCategory={setSelectedCategory} />

        <MapContainer center={defaultPosition} zoom={13} className='map-container'>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          {eventsData
            .filter((event) => !selectedCategory || event.category === selectedCategory)
            .map((event) => (
              <Marker
                key={event.id}
                position={event.position}
                icon={icon}
                eventHandlers={{
                  click: () => {
                    setActiveEvent(event);
                  }
                }}
              />
            ))}
          {activeEvent && (
            <Popup position={activeEvent.position}>
              <div className='popup-inner'>
                <h2 className='popup-inner_title'>{activeEvent.title}</h2>
              </div>
              <p className='popup-inner_description'>{activeEvent.description}</p>
              {typeof window !== 'undefined' && (
                <button
                  className='popup-inner_button'
                  onClick={() => handleFavoriteClick(activeEvent.id)}
                >
                  {favorites.includes(activeEvent.id) ? (
                    <span>{fullStar} Desfavoritar</span>
                  ) : (
                    <span>{emptyStar} Favoritar</span>
                  )}
                </button>
              )}
            </Popup>
          )}

          {activeEvent && <FlyToMarker position={activeEvent.position} zoomLevel={15} />}
        </MapContainer>
      </div>
      <div className="liked-events">
        <h2 className="liked-events_title">
          <i className="fa-solid fa-star"></i> Eventos Favoritos
        </h2>
        <ul>
          {favorites.map((id) => eventsData.find((event) => event.id === id)).map((event) => (
            <li
              key={event?.id}
              className='liked-events_event'
              onClick={() => handleListItemClick(event?.id as number)}
            >
              <h3>{event?.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MapApp;
