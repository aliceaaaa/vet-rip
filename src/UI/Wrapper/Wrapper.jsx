import styles from './Wrapper.module.scss';

const Wrapper = ({ children }) => <div className={styles.main}>{children}</div>;

export default Wrapper;
