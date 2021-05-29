import CallMeForm from '../UI/Form/CallMeForm';

import hrs from '../icons/hrs.svg';
import clock from '../icons/clock.svg';
import bigAnimals from '../icons/bigAnimals.svg';
import stethoscope from '../icons/stethoscope.svg';
import medication from '../icons/medication.svg';
import check from '../icons/check.svg';
import urn from '../icons/urn.svg';
import online from '../icons/online.svg';
import delivery from '../icons/delivery.svg';

import styles from '../App.module.scss';
import Wrapper from '../UI/Wrapper/Wrapper';

const Main = ({ lang }) => {
  const texts = lang
    ? [
        'Гуманная эвтаназия и кремация домашних животных',
        'Выезд за питомцем по Москве и МО',
        'Работаем 24/7',
        'Оперативный выезд',
        'Принимаем крупных животных',
        'Нажимая на кнопку «Заказать звонок», вы соглашаетесь с условиями политики в отношении обработки персональных данных',
        'Опытные ветеринары принимают решение о возможности процедуры',
        'Препараты нового поколения (золетил и пропофол)',
        'Безболезненно для питомца',
        'Гуманная эвтаназия',
        'Общая и индивидуальная кремация',
        'Биоразлагаемая урна в подарок',
        'Онлайн трансляция процесса',
        'Доставка урны с прахом',
      ]
    : [
        'Humane euthanasia and cremation of pets',
        'We can pick up your pet in Moscow Region',
        'We work 24/7',
        'We will arrive promptly',
        'Large animals accepted',
        'By clicking on the "Request a call" button, you agree to the terms of the policy regarding the processing of personal data',
        'Experienced vets decide if the procedure is necessary',
        'New generation medications (zoletil and propofol)',
        'Painless for your pet',
        'Humane euthanasia',
        'Common and individual cremation',
        'Biodegradable urn as a gift',
        'Online broadcast of the process',
        'Urn delivery',
      ];

  return (
    <Wrapper>
      <div className={styles.title}>{texts[0]}</div>
      <div className={styles.sub}>{texts[1]}</div>
      <div className={styles.mainInfo}>
        <div className={styles.item}>
          <img src={hrs} className={styles.icon} alt="hrs" />
          {texts[2]}
        </div>
        <div className={styles.item}>
          <img src={clock} className={styles.icon} alt="clock" />
          {texts[3]}
        </div>
        <div className={styles.item}>
          <img src={bigAnimals} className={styles.icon} alt="bigAnimals" />
          {texts[4]}
        </div>
      </div>
      <CallMeForm lang={lang} />
      <div className={styles.terms}>{texts[5]}</div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.columnTitle}>{texts[9]}</div>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={stethoscope} className={styles.iconSmall} alt="stethoscope" />
            </div>
            {texts[6]}
          </div>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={medication} className={styles.iconSmall} alt="medication" />
            </div>
            {texts[7]}
          </div>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={check} className={styles.iconSmall} alt="check" />
            </div>
            {texts[8]}
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.columnTitle}>{texts[10]}</div>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={urn} className={styles.iconSmall} alt="urn" />
            </div>
            {texts[11]}
          </div>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={online} className={styles.iconSmall} alt="online" />
            </div>
            {texts[12]}
          </div>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={delivery} className={styles.iconSmall} alt="delivery" />
            </div>
            {texts[13]}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Main;
