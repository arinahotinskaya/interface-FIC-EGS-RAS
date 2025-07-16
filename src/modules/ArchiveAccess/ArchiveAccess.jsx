import './ArchiveAccess.scss'
import { stationsName } from '../../constants/constants';
import { useState } from 'react';
import Checkbox from '../CustomInput/Checkbox'
import RadioButton from '../CustomInput/Radiobutton';
import Button from '../../components/Button/Button';

function Stations() {
  const [selectedStations, setSelectedStations] = useState([]);
  const allSelected = selectedStations.length === stationsName.length;
  const [selectedDataType, setSelectedDataType] = useState([]);
  // const [year, setYear] = useState('');
  // const [day, setDay] = useState('');

  function handleStationChange(station) {
    setSelectedStations(prev =>
      prev.includes(station)
        ? prev.filter(s => s !== station)
        : [...prev, station]
    );
  }

  function handleTypeChange(type) {
    setSelectedDataType(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  }

  function handleSelectAll() {
    if (allSelected) {
      setSelectedStations([]);
    } else {
      setSelectedStations(stationsName);
    }
  }

  return(
    <>
      <section className="stations">
        <div className="stations__container">
          <h2 className="stations__title">Доступ к архиву данных ГНСС-наблюдений</h2>
          <div className='stations__list'>
            <h3 className="stations__list-title">Список станций</h3>
            <div className="stations__list-radio">
              {
                stationsName.map(station => {
                  return <Checkbox 
                    key={station} 
                    checked={selectedStations.includes(station)} 
                    onChange={() => handleStationChange(station)} 
                    content={station.toUpperCase()}
                  />
                })
              }
              <Checkbox checked={allSelected} onChange={handleSelectAll} content={'Выбрать все'}/>
            </div>
          </div>
          <div className='stations__criteria'>
            <div className="stations__criteria-data">
              <h3 className="stations__criteria-title">Тип данных</h3>
              <Checkbox
                checked={selectedDataType.includes("daily")}
                onChange={() => handleTypeChange("daily")}
                content="Суточные файлы"
              />
            </div>
            <div className="stations__criteria-time">
              <h3 className="stations__criteria-title">Временной запрос</h3>
              <div className="stations__criteria-inputs">
                <label className="stations__criteria-label">
                  Год
                  <input
                    type="text"
                    placeholder="Например, 2020 или 2020-2023"
                    className="stations__criteria-input"
                  />
                </label>
                <label className="stations__criteria-label">
                  День
                  <input
                    type="text"
                    placeholder="Например, 15 или 10-20"
                    className="stations__criteria-input"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="stations__buttons">
            <Button type="submit" aim="stations" content={'посмотреть'}></Button>
            <Button type="reset" aim="stations" content={'очистить'}></Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stations