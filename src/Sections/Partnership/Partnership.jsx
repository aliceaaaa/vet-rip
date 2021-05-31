import Slider from 'react-animated-slider';
import { Wrapper } from '../../UI';
import { cert, eco, equip, proto1, proto2, proto3, sootv } from '../../images';
import styles from './Partnership.module.scss';
import 'react-animated-slider/build/horizontal.css';

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
