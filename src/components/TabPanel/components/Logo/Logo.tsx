import styles from './Logo.module.scss';
import { ReactComponent as Logos } from './Logo.svg';

export function Logo() {
  return (
    <div className={styles.Logo}>
      <Logos />
    </div>
  );
}
