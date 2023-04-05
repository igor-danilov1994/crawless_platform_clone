import style from './TabItems.module.scss';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as StoreIcon } from './icons/store.svg';
import { ReactComponent as BooksIcon } from './icons/books.svg';

const TabItemsList = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    path: '/',
  },
  {
    name: 'Store',
    icon: <StoreIcon />,
    path: '/',
  },
  {
    name: 'Books',
    icon: <BooksIcon />,
    path: '/',
  },
];

export function TabItems() {
  return (
    <div className={style.TabItems}>
      {TabItemsList.map((item) => (
        <div className={style.TabItem}>{item.icon}</div>
      ))}
    </div>
  );
}
