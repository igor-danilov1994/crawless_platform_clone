import { memo, FC } from 'react';
import { Link } from 'react-router-dom';

import { ITab } from 'types';
import style from './HomePanelItem.module.scss';

interface HonePanelItemProps {
  tab: ITab;
  onOpenTab: (tab: ITab) => void;
}

export const HomePanelItem: FC<HonePanelItemProps> = memo(({ tab, onOpenTab }) => {
  const { title, icon } = tab;

  const onClickHandler = () => {
    onOpenTab(tab);
  };

  return (
    <Link to={title} onClick={onClickHandler} className={style.HonePanelItem}>
      {icon}
      <span>{title}</span>
    </Link>
  );
});
