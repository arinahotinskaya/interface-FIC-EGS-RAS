import './Stations.scss'
import Radiobutton from '../../components/Radiobutton';

function Stations() {
  const stationName = ['artu', 'petp', 'yakt', 'bili', 'yssk', 'yakz', 'irkm', 'pets', 'bilb', 'tixg', 'mobi', 'tixi', 'mobn', 'nril', 'petr', 'svet'];

  return(
    <>
      <section className="stations">
        <div className="stations__container">
          <h2 className="stations__title">Доступ к архиву данных ГНСС-наблюдений</h2>
          <div className='stations__list'>
            <h3 className="stations__list-title">Список станций</h3>
            <div className="stations__list-radio">
              {
                stationName.map(el => {
                  return <Radiobutton content={el}/>
                })
              }
              <Radiobutton content={'Выбрать все'}/>
            </div>
          </div>
          <div className='stations__criteria'>
            <div className="stations__criteria-data">
              <h3 className="stations__criteria-title">Тип данных</h3>
              <Radiobutton content={'Суточные файлы'}/>
              <Radiobutton content={'Часовые файлы'}/>
            </div>
            <div className="stations__criteria-time">
              <h3 className="stations__criteria-title">Временной запрос</h3>
            </div>
            <div className="stations__criteria-request">
              <h3 className="stations__criteria-title">Тип запроса</h3>
              <Radiobutton content={'Запрос на сохранение данных'}/>
              <Radiobutton content={'Запрос на просмотр статистики'}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Stations