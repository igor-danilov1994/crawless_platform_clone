import { FC, memo } from 'react';

import { ITab } from 'types';
import { HonePanelItem } from './components';
import styles from './HomePanel.module.scss';

interface HomePanelProps {
  tabs: ITab[];
  onOpenTab: (tab: ITab) => void;
}

export const HomePanel: FC<HomePanelProps> = memo(({ tabs, onOpenTab }) => (
  <div className={styles.HomePanel}>
    {tabs.map((item) => (
      <HonePanelItem tab={item} onOpenTab={onOpenTab} />
    ))}
  </div>
));
