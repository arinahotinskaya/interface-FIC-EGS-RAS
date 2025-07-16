import './StationCard.scss';

function StationCard({ station }) {
  return (
    <>
      <div className="cards__station">
        <div className="cards__station-container">
          <h3 className="cards__station__title"><strong>{station.Name.toUpperCase()}</strong></h3>
          <p className="cards__station__description"><strong>Координаты (Latitude, Longitude):</strong> {station.Latitude + ', ' + station.Longitude}</p>
          {station.Receiver && <p className="cards__station__description"><strong>Приемник (Receiver):</strong> {station.Receiver.Name}</p>}
          {station.Antenna && <p className="cards__station__description"><strong>Антенна (Antenna):</strong> {station.Antenna.Name}</p>}
          {station.Receiver && <p className="cards__station__description"><strong>Спутниковая система (Satellite system):</strong> {station.Receiver.SatelliteSystem}</p>}
        </div>
      </div>
    </>
  );
}

export default StationCard;