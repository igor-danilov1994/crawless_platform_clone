import { FC, memo } from 'react';

import { Data, Platform } from 'types';
import styles from './PlatformCardItem.module.scss';
import { Echarts, OptionsBar, InfoBlock } from './components';

interface PlatformCardItemProps {
  data: Data;
  platform: Platform;
}

export const PlatformCardItem: FC<PlatformCardItemProps> = memo(({ data, platform }) => {
  const { option } = data;

  return (
    <div className={styles.PlatformCardItem}>
      <div className={styles.info}>
        <InfoBlock platformColor={platform.markColor} data={data} />
        <Echarts option={option} />
      </div>
      <OptionsBar platform={platform} />
    </div>
  );
});
