import './Stations.scss'
import { stationsName } from '../../constants/constants';
import { useState } from 'react';
import Checkbox from '../../components/CustomInput/Checkbox'
import RadioButton from '../../components/CustomInput/Radiobutton';
import Button from '../../components/Button/Button';

function Stations() {
  const [selectedStations, setSelectedStations] = useState([]);
  const allSelected = selectedStations.length === stationsName.length;
  const [selectedDataType, setSelectedDataType] = useState('');
  // const [year, setYear] = useState('');
  // const [day, setDay] = useState('');
  const [selectedRequestType, setSelectedRequestType] = useState('');

  function handleStationChange(station) {
    setSelectedStations(prev =>
      prev.includes(station)
        ? prev.filter(s => s !== station)
        : [...prev, station]
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
              <RadioButton
                name="dataType"
                value="daily"
                checked={selectedDataType === "daily"}
                onChange={() => setSelectedDataType("daily")}
                content="Суточные файлы"
              />
              <RadioButton
                name="dataType"
                value="hourly"
                checked={selectedDataType === "hourly"}
                onChange={() => setSelectedDataType("hourly")}
                content="Часовые файлы"
              />
            </div>
            <div className="stations__criteria-time">
              <h3 className="stations__criteria-title">Временной запрос</h3>
              <div className="stations__criteria-inputs">
                <label className="stations__criteria-label">
                  Год
                  <input
                    type="text"
                    placeholder="Например, 2020 или 2020-2023)"
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
            <div className="stations__criteria-request">
              <h3 className="stations__criteria-title">Тип запроса</h3>
              <RadioButton
                name="requestType"
                value="save"
                checked={selectedRequestType === "save"}
                onChange={() => setSelectedRequestType("save")}
                content={'Запрос на сохранение данных'}
              />
              <RadioButton
                name="requestType"
                value="view"
                checked={selectedRequestType === "view"}
                onChange={() => setSelectedRequestType("view")}
                content={'Запрос на просмотр статистики'}
              />
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