import Slider from 'react-animated-slider';

import cert from '../../images/Cert.jpeg';
import eco from '../../images/eco_cert.jpeg';
import equip from '../../images/Equip.jpeg';
import proto1 from '../../images/proto1.jpeg';
import proto2 from '../../images/proto2.jpeg';
import proto3 from '../../images/proto2.jpeg';
import sootv from '../../images/sootv.jpeg';

import styles from './Partnership.module.scss';
import 'react-animated-slider/build/horizontal.css';
import Wrapper from '../../UI/Wrapper/Wrapper';

const images = [
  { image: cert },
  { image: eco },
  { image: equip },
  { image: proto1 },
  { image: proto2 },
  { image: proto3 },
  { image: sootv },
];

const Partnership = () => {
  return (
    <Wrapper>
      <Slider className={styles.sliderWrapper}>
        {images.map((item) => (
          <div
            key={item}
            style={{ background: `url(${item.image}) no-repeat center center`, backgroundSize: '400px 600px' }}
          />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Partnership;
