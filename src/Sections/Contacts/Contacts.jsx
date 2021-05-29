import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Wrapper from '../../UI/Wrapper/Wrapper';
import styles from './Contacts.module.scss';

const Contacts = ({ lang }) => {
  const texts = lang
    ? [
        'Ветеринарный ритуальный центр "Гнездо ротвейлера"',
        'Наш адрес: улица Генерала Глаголева, дом 7, корпус 1',
        'ИНН: 771789453, ОГРН: 129675432',
        'Телефон:',
        'e-mail:',
      ]
    : [
        "Rottweiler's Nest - Veterinary Ritual Center",
        'Our address: General Glagolev Street, 7, Building 1',
        'INN: 771789453, PSRN: 129675432',
        'tel:',
        'e-mail:',
      ];

  const position = [55.78091921438873, 37.46109519846972];

  return (
    <Wrapper>
      <div>
        <b>{texts[0]}</b>
        <br />
        <br />
        {texts[1]} <br />
        {texts[2]}
        <br />
        {texts[3]} <a href="tel:+74953332211">+7 (495) 333 22 11</a>
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
