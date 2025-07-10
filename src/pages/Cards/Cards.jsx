import "./Cards.scss"
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import russianBorder from '../../constants/russian.json';
import {position, stations} from '../../constants/constants';


function Cards() {
  return (
    <>
      <section className="cards">
          <div className="cards__container">
              <h2 className="cards__title">Карта сети станций ГС РАН</h2>
              <div className="cards__map-container">
                <div className="cards__map">
                  <MapContainer center={position} zoom={2} style={{height: '100%', width: '100%'}} attributionControl={false}>
                    <TileLayer
                      attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <GeoJSON data={russianBorder.features} className="cards__map--border" style={{ color: 'gray', weight: 1.25, fill: true }}/>
                    {stations.map(station => {
                      return (
                        <Marker key={station.name} position={station.coords}>
                          <Popup>
                            <h3>Станция: {station.name.toUpperCase()}</h3>
                            <p>Координаты: {station.coords.join(', ')}</p>
                          </Popup>
                        </Marker>
                      )
                    })}
                  </MapContainer>
                </div>
                <div className="cards__map-info">
                  <ul className="cards__map-info-list">
                    {stations.map(station => {
                      return (
                        <li className="cards__map-info-item" key={station.name}>
                          <span className="cards__map-info-item-title">{station.name.toUpperCase()}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default Cards
