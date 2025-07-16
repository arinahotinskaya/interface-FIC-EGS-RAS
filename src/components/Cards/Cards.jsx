import "./Cards.scss"
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import russianBorder from '../../constants/russian.json';
import { position, stations } from '../../constants/constants';
import StationCard from "../StationCard/StationCard";
import { customGreenMarkerIcon } from "../CustomMarker/CustomMarker";


function Cards() {
  const [selectedStation, setSelectedStation] = useState(null);

  const stationsByCoords = stations.reduce((acc, station) => {
    const key = station.coords.join(',');
    if (!acc[key]) acc[key] = [];
    acc[key].push(station);
    return acc;
  }, {});

  const handleClick = (station) => {
    if (selectedStation && selectedStation.name === station.name) {
      setSelectedStation(null);
    } else {
      setSelectedStation(station);
    }
  };

  return (
    <>
      <section className="cards">
          <div className="cards__container">
              <h2 className="cards__title">Карта сети актуальных станций ФИЦ ЕГС РАН</h2>
              <div className="cards__map-container">
                <div className="cards__map">
                  <MapContainer center={position} zoom={2} style={{height: '100%', width: '100%'}} attributionControl={false}>
                    <TileLayer
                      attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <GeoJSON data={russianBorder.features} className="cards__map--border" style={{ color: 'gray', weight: 1.25, fill: true }}/>
                    {Object.entries(stationsByCoords).map(([coordsStr, stationsGroup]) => {
                      const coords = coordsStr.split(',').map(Number);
                      return (
                        <Marker key={coordsStr} position={coords} icon={customGreenMarkerIcon}>
                          <Popup className="cards__map-popup">
                            {stationsGroup.map(station => (
                              <div key={station.name}>
                                <h3 className="cards__map-popup__title"><strong>{station.name.toUpperCase()}</strong></h3>
                                <p className="cards__map-popup__description"><strong>Координаты (Latitude, Longitude):</strong> {station.coords.join(', ')}</p>
                                {station.receiver && <p className="cards__map-popup__description"><strong>Приемник (Receiver):</strong> {station.receiver}</p>}
                                {station.antenna && <p className="cards__map-popup__description"><strong>Антенна (Antenna):</strong> {station.antenna}</p>}
                                {station.satelliteSystem && <p className="cards__map-popup__description"><strong>Спутниковая система (Satellite system):</strong> {station.satelliteSystem}</p>}
                              </div>
                            ))}
                          </Popup>
                        </Marker>
                      );
                    })}
                  </MapContainer>
                </div>
                <div className="cards__map-info">
                  <ul className="cards__map-info-list">
                    {stations.map(station => {
                      return (
                        <li 
                          className="cards__map-info-item" 
                          key={station.name} 
                          onClick={() => handleClick(station)}
                        >
                          <span className="cards__map-info-item-title">{station.name.toUpperCase()}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {selectedStation && <StationCard station={selectedStation} />}
          </div>
      </section>
    </>
  )
}

export default Cards
