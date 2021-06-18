import { useState } from 'react';
import vocab from '../../Vocab';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Modal from '../Modal/Modal';
import styles from './Info.module.scss';

const Info = ({ lang, setLang }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const texts = vocab(lang);

  return (
    <div className={styles.info}>
      <a href="tel:+74950000000">+7 (495) xxx xx xx</a>

      <Button lang={lang} onClick={() => setModalOpen(!modalOpen)} />

      <div className={styles.lang} onClick={setLang}> {lang ? 'En' : 'Ru'} </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className={styles.title}>{texts.requestACall}</div>
        <Form lang={lang} />
        <div className={styles.terms}>{texts.termsAndPoliceAccept}</div>
      </Modal>
    </div>
  );
};

export default Info;
