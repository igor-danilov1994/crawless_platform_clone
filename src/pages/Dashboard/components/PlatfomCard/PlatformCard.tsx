import { FC } from 'react';

import { Platform } from 'types';
import styles from './PlatformCard.module.scss';
import { PlatformCardHeader, PlatformCardItem } from './components';

interface PlatformCardProps {
  platform: Platform;
}

export const PlatformCard: FC<PlatformCardProps> = ({ platform }) => {
  const { data } = platform;

  return (
    <div className={styles.PlatformCard}>
      <PlatformCardHeader platform={platform} />
      {data.map((item, idx) => (
        <PlatformCardItem key={idx} platform={platform} data={item} />
      ))}
    </div>
  );
};
