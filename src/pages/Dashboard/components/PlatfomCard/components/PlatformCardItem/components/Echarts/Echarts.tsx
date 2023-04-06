import { FC } from 'react';
import ReactEcharts from 'echarts-for-react';

import styles from './Echarts.module.scss';

interface EchartsProps {
  option: Object;
}

export const Echarts: FC<EchartsProps> = ({ option }) => (
  <div className={styles.Echarts}>
    <ReactEcharts option={option} />
  </div>
);
