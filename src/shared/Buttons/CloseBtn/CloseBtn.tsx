import { FC } from 'react';

import { ReactComponent as CloseIcon } from 'assets/close.svg';
import styles from './CloseBtn.module.scss';

interface CloseBtnProps {
  onClose?: () => void;
}

export const CloseBtn: FC<CloseBtnProps> = ({ onClose }) => (
  <button className={styles.CloseBtn} onClick={onClose}>
    <CloseIcon />
  </button>
);
