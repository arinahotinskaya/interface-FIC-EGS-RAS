import './StationCard.scss';

function StationCard({ station }) {
  return (
    <>
      <div className="cards__station">
        <div className="cards__station-container">
          <h3 className="cards__station__title"><strong>{station.name.toUpperCase()}</strong></h3>
          <p className="cards__station__description"><strong>Координаты (Latitude, Longitude):</strong> {station.coords.join(', ')}</p>
          {station.receiver && <p className="cards__station__description"><strong>Приемник (Receiver):</strong> {station.receiver}</p>}
          {station.antenna && <p className="cards__station__description"><strong>Антенна (Antenna):</strong> {station.antenna}</p>}
          {station.satelliteSystem && <p className="cards__station__description"><strong>Спутниковая система (Satellite system):</strong> {station.satelliteSystem}</p>}
        </div>
      </div>
    </>
  );
}

export default StationCard;