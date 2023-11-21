import Link from 'next/link';

import s from './more-link.module.css';

export default function MoreLink(): JSX.Element {
  return (
    <Link className={s.container} href='/all'>
      <h2>Show all badges</h2>
    </Link>
  );
}
