import './TabPhoto.scss'
import { useState } from 'react';

const mobj = import.meta.glob('../../../assets/receivers/mobj/*.{jpg,JPG,png,svg}', { eager: true });
const mobk = import.meta.glob('../../../assets/receivers/mobk/*.{jpg,JPG,png,svg}', { eager: true });
const yssk = import.meta.glob('../../../assets/receivers/yssk/*.{jpg,JPG,png,svg}', { eager: true });

const stationPhotos = {
  mobj: Object.values(mobj).map((mod) => mod.default),
  mobk: Object.values(mobk).map((mod) => mod.default),
  yssk: Object.values(yssk).map((mod) => mod.default),
};

function TabPhoto({ station }) {
  const photos = stationPhotos[station.Name.toLowerCase()] || [];
  const [current, setCurrent] = useState(0);

  if (photos.length === 0) return <div className='cards__station__error'>Нет фото для этой станции.</div>;

  const prev = () => setCurrent((current - 1 + photos.length) % photos.length);
  const next = () => setCurrent((current + 1) % photos.length);

  return (
    <>
      <div className="cards__station__slider">
        <button className="cards__station__button" onClick={prev}>←</button>
        <img className="cards__station__photo" src={photos[current]} alt={`Фото ${current + 1}`} style={{ maxWidth: '75%'}}/>
        <button className="cards__station__button" onClick={next}>→</button>
      </div>
      <div className="cards__station__counter" >{current + 1} / {photos.length}</div>
    </>
  );
}

export default TabPhoto;