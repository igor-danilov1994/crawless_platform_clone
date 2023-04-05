import { FC } from 'react';

import style from './Profile.module.scss';
import { ReactComponent as Avatar } from './icons/avatar.svg';

interface ProfileProps {
  avatar?: string;
}

export const Profile: FC<ProfileProps> = ({ avatar }) => (
  <div className={style.Profile}>{avatar ? <img src={avatar} alt="avatar" /> : <Avatar />}</div>
);
