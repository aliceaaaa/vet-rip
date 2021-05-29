import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Wrapper from '../../UI/Wrapper/Wrapper';
import styles from './Contacts.module.scss';

const Contacts = ({ lang }) => {
  const texts = lang
    ? [
        'Ветеринарный ритуальный центр "Гнездо ротвейлера"',
        'Наш адрес: г. Москва, Московская область',
        'ИНН: xxxxxxxxx, ОГРН: xxxxxxxxxxx',
        'Телефон:',
        'e-mail:',
      ]
    : [
        "Rottweiler's Nest - Veterinary Ritual Center",
        'Our address: Moscow, Moscow region',
        'INN: xxxxxxxxx, PSRN: xxxxxxxxxxx',
        'tel:',
        'e-mail:',
      ];

  const position = [55.754008769708186, 37.62078963388403];

  return (
    <Wrapper>
      <div>
        <b>{texts[0]}</b>
        <br />
        <br />
        {texts[1]} <br />
        {texts[2]}
        <br />
        {texts[3]} <a href="tel:+74950000000">+7 (495) xxx xx xx</a>
        <br />
        {texts[4]} <a href="mailto:gnezdo@vet.rip">gnezdo@vet.rip</a>
      </div>
      <MapContainer center={position} zoom={11} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Гнездо</Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
};

export default Contacts;
