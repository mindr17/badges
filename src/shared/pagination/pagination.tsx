'use client';

interface Props {
  page: number;
  setPage: () => void;
}

export default function BadgeProduct(props: Props): JSX.Element {
  const { page, setPage } = props;

  return (
    <div className={s.container}>
      <ul className={s.paginationButtons}></ul>
    </div>
  );
}
