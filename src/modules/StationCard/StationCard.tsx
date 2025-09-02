import { useState } from 'react';
import './StationCard.scss'
import TabAntenna from './StationCardTabs/TabAntenna.tsx'
import TabOverview from'./StationCardTabs/TabOverview.tsx'
import TabPhoto from'./StationCardTabs/TabPhoto.tsx'
import TabReceiver from './StationCardTabs/TabReceiver.tsx'
import { Station } from '@constants/constants.ts'


function StationCard({ station }: { station: Station }) {
  const [tab, setTab] = useState('overview');

  const jsonString: string = JSON.stringify(station, null, 2);
  const jsonBlob: Blob = new Blob([jsonString], { type: 'application/json' });
  const jsonUrl: string = URL.createObjectURL(jsonBlob);
  
  let content;
  if (tab === 'overview') content = <TabOverview station={station} />;
  else if (tab === 'antenna') content = <TabAntenna station={station} />;
  else if (tab === 'receiver') content = <TabReceiver station={station} />;
  else if (tab === 'photo') content = <TabPhoto station={station} />;
  
  return (
    <div className='cards__station'>
      <div className='cards__station-container'>
        <div className='cards__station__titles'>
          <h3 className='cards__station__title'><strong>{station.Name.toUpperCase()}</strong></h3>
          <a href={jsonUrl} className='cards__station__link' download={`${station.Name.toLowerCase()}Passport.json`}>(Скачать паспорт)</a>
        </div>
        <div className='cards__station-links'>
          <button onClick={() => setTab('overview')} className='button cards__station-link'>Информация</button>
          <button onClick={() => setTab('antenna')} className='button cards__station-link'>Антенна</button>
          <button onClick={() => setTab('receiver')} className='button cards__station-link'>Приемник</button>
        </div>
        {content}
      </div>
    </div>
  );
}

export default StationCard;