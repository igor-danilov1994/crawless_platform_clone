import { FC, useEffect, useState } from 'react';

import style from './Switcher.module.scss';

interface SwitcherProps {
  onActive?: (value: boolean) => void;
}

export const Switcher: FC<SwitcherProps> = ({ onActive }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    onActive?.(toggle);
  }, [toggle]);

  return (
    <div className={`${style.Switcher} ${toggle ? style.active : undefined}`} onClick={onToggle}>
      <span />
    </div>
  );
};
