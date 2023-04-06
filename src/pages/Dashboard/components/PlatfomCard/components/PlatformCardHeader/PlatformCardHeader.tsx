import { FC, memo } from 'react';

import { ReactComponent as OptionsIcon } from 'assets/platformCardHeaderOptions.svg';

import { Platform } from 'types';
import styles from './PlatformCardHeader.module.scss';

interface PlatformCardHeaderProps {
  platform: Platform;
}

export const PlatformCardHeader: FC<PlatformCardHeaderProps> = memo(({ platform }) => {
  const { name, markColor } = platform;
  return (
    <div className={`${styles.PlatformCardHeader}`}>
      <div className={styles.title}>
        <span className={`${styles.mark} ${styles[markColor]}`} />
        <span>{name.toUpperCase()}</span>
      </div>
      <div className={styles.options}>
        <OptionsIcon />
      </div>
    </div>
  );
});
