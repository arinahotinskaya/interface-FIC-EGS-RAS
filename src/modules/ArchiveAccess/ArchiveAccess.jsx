import './ArchiveAccess.scss'
import { allStationNames } from '../../constants/constants';
import { useState } from 'react';
import Checkbox from '../../components/CustomInput/Checkbox'
// import RadioButton from '../../components/CustomInput/Radiobutton';
import Button from '../../components/Button/Button';

function Stations() {
  const [selectedStations, setSelectedStations] = useState([]);
  const allSelected = selectedStations.length === allStationNames.length;
  const [selectedDataType, setSelectedDataType] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());   

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
      setSelectedStations(allStationNames);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      stations: selectedStations,
      type: selectedDataType,
      startDate,
      endDate
    };
    const jsonData = JSON.stringify(formData, null, 2);
    console.log(jsonData); // Дописать обращение к бекенду
  }

  function handleReset() {
    setSelectedStations([]);
    setSelectedDataType([]);
    setStartDate('');
    setEndDate('');
  }

  return(
    <>
      <section className="stations">
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <div className="stations__container">
            <h2 className="stations__title">Доступ к архиву данных ГНСС-наблюдений</h2>
            <div className='stations__list'>
              <h3 className="stations__list-title">Список станций</h3>
              <div className="stations__list-radio">
                {
                  allStationNames.map(station => {
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
                  <input
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="stations__criteria-input"
                  />
                </label>
                <label className="stations__criteria-label">
                  –
                  <input
                    type="date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    className="stations__criteria-input"
                  />
                </label>
              </div>
            </div>
            <div className="stations__buttons">
              <Button type="submit" aim="stations" content={'посмотреть'}></Button>
              <Button type="reset" aim="stations" content={'очистить'}></Button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Stations