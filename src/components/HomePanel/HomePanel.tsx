import { FC, memo } from 'react';

import { ITab } from 'types';
import { HomePanelItem } from './components';
import styles from './HomePanel.module.scss';

interface HomePanelProps {
  tabs: ITab[];
  onOpenTab: (tab: ITab) => void;
}

export const HomePanel: FC<HomePanelProps> = memo(({ tabs, onOpenTab }) => (
  <div className={styles.HomePanel}>
    {tabs.map((item) => (
      <HomePanelItem tab={item} onOpenTab={onOpenTab} />
    ))}
  </div>
));
