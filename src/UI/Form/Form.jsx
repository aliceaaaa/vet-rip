import Button from '../Button/Button';

import styles from './Form.module.scss';

const Form = ({ lang }) => {
  const formTexts = lang ? ['Ваше имя', 'Ваш телефон'] : ['Your name', 'Your phone number'];

  return (
    <form className={styles.form}>
      <input name="name" placeholder={formTexts[0]} type="text" />
      <input type="tel" name="phone" placeholder={formTexts[1]} />
      <Button lang={lang} />
    </form>
  );
};

export default Form;
