import { useState } from 'react';
import { Contacts, Main, Prices, Partnership, Procedure, AboutUs } from './Sections';
import Header from './UI/Header/Header';
import dog from './icons/dog.svg';
import raccoon from './icons/raccoon.svg';
import styles from './App.module.scss';

function App() {
  const [lang, setLang] = useState(true);
  const [tab, setTab] = useState('');

  const renderSection = () => {
    switch (tab) {
      case 0:
        return <AboutUs lang={lang} />;
      case 1:
        return <Prices lang={lang} />;
      case 2:
        return <Contacts lang={lang} />;
      case 3:
        return <Partnership lang={lang} />;
      case 4:
        return <Procedure lang={lang} />;
      default:
        return <Main lang={lang} />;
    }
  };

  return (
    <div className={styles.app}>
      <Header setLang={() => setLang(!lang)} lang={lang} setTab={(index) => setTab(index)} tab={tab} />
      <img src={dog} className={styles.dog} alt="dog" />
      <img src={raccoon} className={styles.raccoon} alt="raccoon" />
      {renderSection()}
    </div>
  );
}

export default App;
