import Button from '../Button/Button';

import styles from './Form.module.scss';

const Form = ({ lang }) => {
  const formTexts = lang ? ['Ваше имя', 'Ваш телефон'] : ['Your name', 'Your phone number'];

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input name="name" placeholder={formTexts[0]} type="text" />
      <input type="tel" name="phone" placeholder={formTexts[1]} />
      <Button lang={lang} onClick={() => {}} />
    </form>
  );
};

export default Form;
