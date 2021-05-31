import styles from './IconGroup.module.scss';

const IconMain = ({ src = '', alt = '', text, num, isSmall = false }) => (
  <div className={styles.item}>
    {!!src ? (
      <img src={src} className={isSmall ? styles.iconSmall : styles.icon} alt={alt} />
    ) : (
      <div className={styles.circle}>{num}</div>
    )}
    {text}
  </div>
);

export default IconMain;
