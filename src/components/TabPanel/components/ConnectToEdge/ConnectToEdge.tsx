import { useCallback, useState } from 'react';

import { Switcher } from 'shared';
import { ReactComponent as InfoIcon } from './icons/info.svg';
import style from './ConnectToEdge.module.scss';

export function ConnectToEdge() {
  const [active, setActive] = useState(true);

  const toggleActive = useCallback((value: boolean) => {
    setActive(value);
  }, []);

  return (
    <div className={`${style.ConnectToEdge} ${active ? style.active : undefined}`}>
      <div className={style.Switcher}>
        <Switcher isActive={active} onActive={toggleActive} />
      </div>
      <p>Connect to edge</p>
      <div className={style.info} title="We can connect to edge">
        <InfoIcon />
      </div>
    </div>
  );
}
