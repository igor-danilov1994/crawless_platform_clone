import { FC, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ITab } from 'types';
import { Tab } from './components';
import styles from './TabList.module.scss';

interface TabListProps {
  activeTabList: ITab[];
  onCloseTab: (value: string) => void;
}

export const TabList: FC<TabListProps> = memo(({ activeTabList, onCloseTab }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onClose = (value: string) => {
    onCloseTab(value);
  };

  if (!activeTabList.length) return null;

  return (
    <div className={styles.TabList}>
      {activeTabList.map((item, idx) => {
        const isActive = pathname === `/${item.title}`;
        // if (!isActive && idx === 0) {
        //   navigate(item.title);
        // }

        return <Tab key={idx} isActive={isActive} tab={item} onCloseTab={onClose} />;
      })}
    </div>
  );
});
