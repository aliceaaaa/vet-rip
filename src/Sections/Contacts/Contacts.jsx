import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Wrapper } from '../../UI';
import vocab from '../../Vocab';
import styles from './Contacts.module.scss';

const Contacts = ({ lang }) => {
  const position = [55.754008769708186, 37.62078963388403];
  const texts = vocab(lang);

  return (
    <Wrapper>
      <div className={styles.info}>
        <b>{texts.vetRitualCenter}</b>
        <span>{texts.address}</span>
        <span>{texts.inn}</span>
        <span>{texts.tel}<a href="tel:+74950000000">+7 (495) xxx xx xx</a> </span>
        <span>{texts.email}<a href="mailto:gnezdo@vet.rip">gnezdo@vet.rip</a> </span>
      </div>
      <MapContainer center={position} zoom={11} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Vet.rip</Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
};

export default Contacts;
