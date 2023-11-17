interface Props {
  html: string | null | undefined;
}

import s from './Icon.module.css';

export default function Icon(props: Props) {
  const { html = '' } = props;

  if (!html) return <></>;

  return (
    <div
      className={s.container}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
