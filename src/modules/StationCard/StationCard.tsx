import { useState } from 'react';
import './StationCard.scss'
import TabAntenna from './StationCardTabs/TabAntenna.tsx'
import TabOverview from'./StationCardTabs/TabOverview.tsx'
import TabPhoto from'./StationCardTabs/TabPhoto.tsx'
import TabReceiver from './StationCardTabs/TabReceiver.tsx'
import { Station } from '@constants/constants.ts'


function StationCard({ station }: { station: Station }) {
  const jsonString: string = JSON.stringify(station, null, 2);
  const jsonBlob: Blob = new Blob([jsonString], { type: 'application/json' });
  const jsonUrl: string = URL.createObjectURL(jsonBlob);
  
  const content_overview = <TabOverview station={station} />;
  // const content_antenna = <TabAntenna station={station} />;
  // const content_receiver = <TabReceiver station={station} />;
  const content_photo = <TabPhoto station={station} />;
  
  return (
    <div className='cards__station'>
      <div className='cards__station-container'>
        <div className='cards__station__titles'>
          <h3 className='cards__station__title'><strong>{station.Name.toUpperCase()}</strong></h3>
          <a href={jsonUrl} className='cards__station__link' download={`${station.Name.toLowerCase()}Passport.json`}>паспорт станции</a>
        </div>
        <div className='cards__station-content'>
          {content_overview}
          {content_photo}
        </div>
      </div>
    </div>
  );
}

export default StationCard;