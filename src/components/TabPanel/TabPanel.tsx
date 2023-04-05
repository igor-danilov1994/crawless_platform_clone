import styles from './TabPanel.module.scss';

import { Logo, TabItems, ConnectToEdge } from './components';

export function TabPanel() {
  return (
    <div className={styles.TabPanel}>
      <Logo />
      <TabItems />
      <ConnectToEdge />
    </div>
  );
}
