import styles from '../App.module.scss';
import cross from '../icons/cross.svg';
import medication from '../icons/medication.svg';
import check from '../icons/check.svg';
import Wrapper from '../UI/Wrapper/Wrapper';

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
        "If your pet's pathology is incurable and they are constantly in pain, the most humane thing to do is euthanasia. If death is a matter of time do not doubt that you are helping your friend to stop suffering.",
        'Experienced vets issue death certificates',
        'New generation medications (zoletil and propofol)',
        'Painless for your pet',
        'What will happen',
        'Experienced vets decide if the procedure is necessary',
        'We make the first injection, the Pet falls asleep within 10 minutes',
        'We make the injection of the medication for euthanasia. We check the absence of breathing, heartbeat and deep reflexes.',
        'We issue the death certificate',
        'Our additional services',
        'Picking up your pet for free',
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
          <div className={styles.item}>
            <img src={cross} className={styles.iconSmall} alt="cross" />
            {texts[2]}
          </div>
          <div className={styles.item}>
            <img src={medication} className={styles.iconSmall} alt="medication" />
            {texts[3]}
          </div>
          <div className={styles.item}>
            <img src={check} className={styles.iconSmall} alt="check" />
            {texts[4]}
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.header}>{texts[5]}</div>
        <div className={styles.mainInfo} style={{ marginTop: 30 }}>
          <div className={styles.item}>
            <div className={styles.circle}>1</div>
            {texts[6]}
          </div>
          <div className={styles.item}>
            <div className={styles.circle}>2</div>
            {texts[7]}
          </div>
          <div className={styles.item}>
            <div className={styles.circle}>3</div>
            {texts[8]}
          </div>
          <div className={styles.item}>
            <div className={styles.circle}>4</div>
            {texts[9]}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.header}>{texts[10]}</div>
        <div style={{ margin: '40px 0 0 40px' }}>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={check} className={styles.iconSmall} style={{ width: 40 }} alt="check" />
            </div>
            {texts[11]}
          </div>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={check} className={styles.iconSmall} style={{ width: 40 }} alt="check" />
            </div>
            {texts[12]}
          </div>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={check} className={styles.iconSmall} style={{ width: 40 }} alt="check" />
            </div>
            {texts[13]}
          </div>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={check} className={styles.iconSmall} style={{ width: 40 }} alt="check" />{' '}
            </div>
            {texts[14]}
          </div>
          <div className={styles.iconGroup}>
            <div className={styles.iconWrapper}>
              <img src={check} className={styles.iconSmall} style={{ width: 40 }} alt="check" />
            </div>
            {texts[15]}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Procedure;
