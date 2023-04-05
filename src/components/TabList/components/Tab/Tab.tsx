import { FC, memo } from 'react';

import { ITab } from 'types';
import { CloseBtn } from 'shared';
import { Link } from 'react-router-dom';
import styles from './Tab.module.scss';

interface TabProps {
  isActive?: boolean;
  onCloseTab: (title: string) => void;
  tab: ITab;
}

export const Tab: FC<TabProps> = memo(({ tab, isActive, onCloseTab }) => {
  const { title, icon } = tab;

  const onClose = () => {
    onCloseTab(title);
  };

  return (
    <Link to={title} className={`${styles.Tab} ${isActive ? styles.active : undefined}`}>
      {icon}
      <span>{title}</span>
      <div className={`${isActive ? styles.visible : styles.hidden}`}>
        <CloseBtn onClose={onClose} />
      </div>
    </Link>
  );
});
