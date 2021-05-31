import { IconGroup, IconMain, Wrapper } from '../../UI';
import { cross, medication, check } from '../../icons';
import styles from './Procedure.module.scss';

const Procedure = ({ lang }) => {
  const texts = lang
    ? [
        'Избавьте ваше животное от мучений',
        'Если патология вашего любимца неизлечима и он постоянно испытывает боль, наиболее гуманно – сделать эвтаназию. Если вы видите, что питомец страдает, а смерть – вопрос времени, не сомневайтесь, что вы помогли ему избавиться от мучений.',
        'Опытные ветеринары выдают свидетельство о смерти',
        'Препараты нового поколения (золетил и пропофол)',
        'Безболезненно для питомца',
        'Как все происходит',
        'Опытные ветеринары принимают решение о возможности процедуры',
        'Вводим инъекцию, Питомец засыпает в течение 10 мин глубоким сном',
        'Вводим препарат эвтаназии. Проверяем отсутствие дыхания, сердцебиения и глубоких рефлексов',
        'Выдаем свидетельство о смерти питомца',
        'Вы можете воспользоваться дополнительными услугами:',
        'Вывоз животного бесплатно',
        'Онлайн трасляция 1000руб',
        'Доставка урны с прахом 1000руб',
        'Общая кремация от 1000 руб',
        'Индивидуальная кремация от 7000 руб',
      ]
    : [
        'Save your pet from suffering',
        'If pathology is incurable and your pet is in pain, the most humane thing to do is euthanasia. If death is a matter of time do not doubt that you are helping your friend to stop suffering.',
        'Experienced vets issue death certificates',
        'New generation medications (zoletil and propofol)',
        'Painless for your pet',
        'What will happen',
        'Experienced vets decide if the procedure is necessary',
        'We make the first injection, your pet falls asleep within 10 minutes',
        'We make the injection of the medication for euthanasia. We check the absence of breathing, heartbeat and deep reflexes.',
        'We issue the death certificate',
        'Our additional services',
        'Picking your pet up for free',
        'Online translation - 1000rub',
        'Delivery of the urn - 1000rub',
        'Common cremation from 1000rub',
        'Individual creation from 7000 rub',
      ];

  return (
    <Wrapper>
      <div className={styles.section}>
        <div className={styles.header}>{texts[0]}</div>
        <div className={styles.description}>{texts[1]}</div>

        <div className={styles.mainInfo} style={{ marginTop: 30, maxWidth: 800 }}>
          <IconMain src={cross} alt="cross" text={texts[2]} isSmall />
          <IconMain src={medication} alt="medication" text={texts[3]} isSmall />
          <IconMain src={check} alt="check" text={texts[4]} isSmall />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.header}>{texts[5]}</div>
        <div className={styles.mainInfo} style={{ marginTop: 30 }}>
          <IconMain text={texts[6]} num="1" />
          <IconMain text={texts[7]} num="2" />
          <IconMain text={texts[8]} num="3" />
          <IconMain text={texts[9]} num="4" />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.header}>{texts[10]}</div>
        <div style={{ margin: '40px 0 0 40px' }}>
          <IconGroup src={check} alt="check" text={texts[11]} style={{ width: 40 }} />
          <IconGroup src={check} alt="check" text={texts[12]} style={{ width: 40 }} />
          <IconGroup src={check} alt="check" text={texts[13]} style={{ width: 40 }} />
          <IconGroup src={check} alt="check" text={texts[14]} style={{ width: 40 }} />
          <IconGroup src={check} alt="check" text={texts[15]} style={{ width: 40 }} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Procedure;
