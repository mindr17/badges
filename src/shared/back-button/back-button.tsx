import Link from 'next/link';

import s from './back-button.module.css';

export default function BackButton(): JSX.Element {
  return (
    <div className={s.container}>
      <Link className={s.link} href={'/'}>
        Back to categories
      </Link>
    </div>
  );
}
