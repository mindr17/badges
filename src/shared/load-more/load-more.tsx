import s from './load-more.module.css';

interface Props {
  title: string;
  callback: () => void;
}

export default function MoreLink(props: Props): JSX.Element {
  const { title, callback } = props;

  return (
    <button
      className={`${s.loadMore} ${s.allLoaded}`}
      onClick={callback}
    >
      {title}
    </button>
  );
}
