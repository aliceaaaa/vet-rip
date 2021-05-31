import { useState } from 'react';
import { Info } from '..';
import { logo, heartRate } from '../../icons';
import styles from './Header.module.scss';

const Header = ({ lang, tab, setTab, orderCall, setLang }) => {
  const [hovered, setHovered] = useState(null);

  const tabs = lang
    ? ['о нас', 'услуги и цены', 'контакты', 'для сотрудничества', 'о процедуре']
    : ['about us', 'services and prices', 'contacts', 'partnership', 'procedure'];

  const getStyle = (index) => {
    if (tab === index) return { opacity: 0.4, cursor: 'default' };
    if (hovered === index && tab !== index) return { color: '#18aa94' };
  };

  return (
    <header className={styles.head}>
      <img src={logo} className={styles.logo} alt="dog" onClick={() => setTab('')} />

      <div className={styles.menu}>
        {tabs.map((title, index) => (
          <div
            key={title}
            style={getStyle(index)}
            className={styles.menuItem}
            onClick={() => setTab(index)}
            onMouseOver={() => setHovered(index)}
            onMouseOut={() => setHovered(null)}
          >
            {title}
          </div>
        ))}
      </div>

      <Info orderCall={orderCall} setLang={setLang} lang={lang} />

      <img src={heartRate} className={styles.heartRate} alt="heart-rate" />
    </header>
  );
};

export default Header;
