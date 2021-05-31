import styles from './IconGroup.module.scss';

const IconGroup = ({ src, alt, text, style = {} }) => (
  <div className={styles.iconGroup}>
    <div className={styles.iconWrapper}>
      <img src={src} className={styles.iconSmall} alt={alt} style={style} />
    </div>
    {text}
  </div>
);

export default IconGroup;
