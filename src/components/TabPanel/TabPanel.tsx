import { memo } from 'react';

import { Profile, Setting } from 'shared';
import styles from './TabPanel.module.scss';

import { Logo, TabItems, ConnectToEdge } from './components';

export const TabPanel = memo(() => (
  <div className={styles.TabPanel}>
    <div>
      <Logo />
      <TabItems />
    </div>
    <ConnectToEdge />
    <div className={styles.TabPanel_footer}>
      <span className={styles.money}>$ 450</span>
      <div className={styles.profile}>
        <Profile />
      </div>
      <Setting />
    </div>
  </div>
));
