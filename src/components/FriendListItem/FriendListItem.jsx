import clsx from 'clsx';
import style from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const status = clsx(isOnline ? style.active : style.notActive);
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={status}>{isOnline ? 'online' : 'offline'}</p>
    </div>
  );
}
