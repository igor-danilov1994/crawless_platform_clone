import { memo, FC } from 'react';

import { ReactComponent as DollarIcon } from 'assets/dollar.svg';
import { ReactComponent as Icon } from 'assets/dashboards.svg';

import { Data } from 'types';
import styles from './InfoBlock.module.scss';

interface InfoBlockProps {
  data: Data;
  platformColor: string;
}

export const InfoBlock: FC<InfoBlockProps> = memo(({ data, platformColor }) => {
  const { name, value } = data;

  return (
    <div className={styles.InfoBlock}>
      <div className={styles.name}>
        <Icon />
        <span>{name}</span>
      </div>
      <div className={`${styles.value} ${styles[platformColor]}`}>
        <DollarIcon />
        <span>{value}</span>
      </div>
    </div>
  );
});
