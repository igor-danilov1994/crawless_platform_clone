import { memo, useState, FC } from 'react';

import { ReactComponent as InternetIcon } from 'assets/internetIcon.svg';
import { ReactComponent as ComputerIcon } from 'assets/computerIcon.svg';
import { Platform } from 'types';
import styles from './OptionsBar.module.scss';

interface OptionsBarProps {
  platform: Platform;
}

export const OptionsBar: FC<OptionsBarProps> = memo(({ platform }) => {
  const [isActiveLan, setActiveLan] = useState(false);
  const [isActiveComputer, setActiveComputer] = useState(false);

  const onConnectLan = () => setActiveLan((prev) => !prev);

  const onConnectComputer = () => setActiveComputer((prev) => !prev);

  return (
    <div className={styles.OptionsBar}>
      <div className={`${isActiveLan ? styles[platform.markColor] : styles.icon} `} onClick={onConnectLan}>
        <InternetIcon />
      </div>
      <div className={`${isActiveComputer ? styles[platform.markColor] : styles.icon}`} onClick={onConnectComputer}>
        <ComputerIcon />
      </div>
    </div>
  );
});
