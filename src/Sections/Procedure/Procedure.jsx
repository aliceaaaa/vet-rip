import { IconGroup, IconMain, Wrapper } from '../../UI';
import { cross, medication, check } from '../../icons';
import styles from './Procedure.module.scss';
import vocab from '../../Vocab';

const Procedure = ({ lang }) => {
  const texts = vocab(lang);

  return (
    <Wrapper>
      <div className={styles.section}>
        <div className={styles.header}>{texts.saveFromSuffer}</div>
        <div className={styles.description}>{texts.pathologyIncurable}</div>

        <div className={styles.mainInfo} style={{ marginTop: 30, maxWidth: 800 }}>
          <IconMain src={cross} alt="cross" text={texts.experiencedVetsDeathCertificate} isSmall />
          <IconMain src={medication} alt="medication" text={texts.newGenMedications} isSmall />
          <IconMain src={check} alt="check" text={texts.painless} isSmall />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.header}>{texts.whatWillHappen}</div>
        <div className={styles.mainInfo} style={{ marginTop: 30 }}>
          <IconMain text={texts.procedureNecessary} num="1" />
          <IconMain text={texts.firstInjection} num="2" />
          <IconMain text={texts.euthanasiaInjection} num="3" />
          <IconMain text={texts.deathCertificate} num="4" />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.header}>{texts.additionalServices}</div>
        <div style={{ margin: '40px 0 0 40px' }}>
          <IconGroup src={check} alt="check" text={texts.pickUpFree} style={{ width: 40 }} />
          <IconGroup src={check} alt="check" text={texts.onlineTranslation} style={{ width: 40 }} />
          <IconGroup src={check} alt="check" text={texts.urnDeliveryPrice} style={{ width: 40 }} />
          <IconGroup src={check} alt="check" text={texts.commonCremation} style={{ width: 40 }} />
          <IconGroup src={check} alt="check" text={texts.individualCremation} style={{ width: 40 }} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Procedure;
