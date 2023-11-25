import Link from 'next/link';

import s from './button-primary.module.css';

interface Props {
  type?: string;
  title: string;
  href?: string;
  callback?: () => void;
}

export default function ButtonPrimary(props: Props): JSX.Element {
  const { title, href, callback } = props;

  return (
    <Link className={s.container} href={href || '/'}>
      {title}
    </Link>
  );
}
