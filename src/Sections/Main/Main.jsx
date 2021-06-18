import { Form, IconGroup, IconMain, Wrapper } from '../../UI';
import { hrs, clock, bigAnimals, stethoscope, medication, check, urn, online, delivery } from '../../icons';
import styles from './Main.module.scss';
import vocab from '../../Vocab';

const Main = ({ lang }) => {
  const texts = vocab(lang);

  return (
    <Wrapper>
      <div className={styles.title}>{texts.humaneEuthanasiaAndCremation}</div>
      <div className={styles.sub}>{texts.pickUp}</div>
      <div className={styles.mainInfo}>
        <IconMain src={hrs} alt="hrs" text={texts.workingHours} />
        <IconMain src={clock} alt="clock" text={texts.promptArrival} />
        <IconMain src={bigAnimals} alt="bigAnimals" text={texts.largeAnimals} />
      </div>
      <Form lang={lang} />
      <div className={styles.terms}>{texts.termsAndPoliceAccept}</div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.columnTitle}>{texts.humaneEuthanasia}</div>
          <IconGroup src={stethoscope} alt="stethoscope" text={texts.experiencedVets} />
          <IconGroup src={medication} alt="medication" text={texts.newGenMedications} />
          <IconGroup src={check} alt="check" text={texts.painless} />
        </div>
        <div className={styles.column}>
          <div className={styles.columnTitle}>{texts.cremation}</div>
          <IconGroup src={urn} alt="urn" text={texts.urnAsGift} />
          <IconGroup src={online} alt="online" text={texts.onlineProcess} />
          <IconGroup src={delivery} alt="delivery" text={texts.urnDelivery} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Main;
