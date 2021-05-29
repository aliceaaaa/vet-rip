import { useEffect, useRef } from 'react';
import reactDom from 'react-dom';

import styles from './Modal.module.scss';

const Modal = ({ open = false, children, onClose }) => {
  const rootRef = useRef(document.createElement('article'));

  useEffect(() => {
    if (!open) return () => {};

    const root = rootRef.current;
    document.body.appendChild(root);
    document.addEventListener('keydown', escFunction, false);

    return () => {
      root.remove();
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const escFunction = (event) => {
    const { keyCode, target } = event;

    if (keyCode === 27 || target.id === '#wrapper') onClose();
  };

  if (!open) return <></>;

  return reactDom.createPortal(
    <div id="#wrapper" className={styles.wrapper} onClick={escFunction}>
      <article id="#container" className={styles.container}>
        {children}
      </article>
    </div>,
    rootRef.current
  );
};

export default Modal;
