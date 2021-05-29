import styles from './Button.module.scss';

const Button = ({ lang, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {lang ? 'заказать звонок' : 'requeset a call'}
  </button>
);

export default Button;
