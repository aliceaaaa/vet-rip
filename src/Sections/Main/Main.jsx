import { Form, IconGroup, IconMain, Wrapper } from '../../UI';
import { hrs, clock, bigAnimals, stethoscope, medication, check, urn, online, delivery } from '../../icons';
import styles from './Main.module.scss';

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
        'We can pick your pet up in Moscow Region',
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
        'You can see the whole process online',
        'Urn delivery',
      ];

  return (
    <Wrapper>
      <div className={styles.title}>{texts[0]}</div>
      <div className={styles.sub}>{texts[1]}</div>
      <div className={styles.mainInfo}>
        <IconMain src={hrs} alt="hrs" text={texts[2]} />
        <IconMain src={clock} alt="clock" text={texts[3]} />
        <IconMain src={bigAnimals} alt="bigAnimals" text={texts[4]} />
      </div>
      <Form lang={lang} />
      <div className={styles.terms}>{texts[5]}</div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.columnTitle}>{texts[9]}</div>
          <IconGroup src={stethoscope} alt="stethoscope" text={texts[6]} />
          <IconGroup src={medication} alt="medication" text={texts[7]} />
          <IconGroup src={check} alt="check" text={texts[8]} />
        </div>
        <div className={styles.column}>
          <div className={styles.columnTitle}>{texts[10]}</div>
          <IconGroup src={urn} alt="urn" text={texts[11]} />
          <IconGroup src={online} alt="online" text={texts[12]} />
          <IconGroup src={delivery} alt="delivery" text={texts[13]} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Main;
