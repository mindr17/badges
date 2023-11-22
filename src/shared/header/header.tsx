import Link from 'next/link';

import s from './header.module.css';

export default function Header(): JSX.Element {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <Link href={'/'}>Home</Link>
        </li>
        <li className={s.item}>
          <Link href={'/all'}>All</Link>
        </li>
      </ul>
    </div>
  );
}
