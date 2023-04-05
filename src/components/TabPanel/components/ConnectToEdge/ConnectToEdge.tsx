import { Switcher } from 'shared';
import style from './ConnectToEdge.module.scss';

export function ConnectToEdge() {
  return (
    <div className={style.ConnectToEdge}>
      <Switcher />
      <p>Connect to edge</p>
    </div>
  );
}
