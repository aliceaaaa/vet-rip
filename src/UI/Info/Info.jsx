import { useState } from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Modal from '../Modal/Modal';
import styles from './Info.module.scss';

const Info = ({ lang, setLang }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const texts = lang
    ? [
        'Заказать обратный звонок',
        'Нажимая на кнопку «Заказать звонок», вы соглашаетесь с условиями политики в отношении обработки персональных данных',
      ]
    : [
        'Request a call',
        'By clicking on the "Request a call" button, you agree to the terms of the policy regarding the processing of personal data',
      ];

  return (
    <div className={styles.info}>
      <a href="tel:+74950000000">+7 (495) xxx xx xx</a>

      <Button lang={lang} onClick={() => setModalOpen(!modalOpen)} />

      <div className={styles.lang} onClick={setLang}>
        {lang ? 'En' : 'Ru'}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className={styles.title}>{texts[0]}</div>
        <Form lang={lang} />
        <div className={styles.terms}>{texts[1]}</div>
      </Modal>
    </div>
  );
};

export default Info;
