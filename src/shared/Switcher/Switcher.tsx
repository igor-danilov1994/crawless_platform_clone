import { FC, memo, useEffect, useState } from 'react';

import style from './Switcher.module.scss';

interface SwitcherProps {
  isActive?: boolean;
  onActive?: (value: boolean) => void;
}

export const Switcher: FC<SwitcherProps> = memo(({ isActive = false, onActive }) => {
  const [toggle, setToggle] = useState(isActive);

  useEffect(() => {
    onActive?.(toggle);
  }, [toggle]);

  const onToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className={`${style.Switcher} ${toggle ? style.active : undefined}`} onClick={onToggle}>
      <span />
    </div>
  );
});
