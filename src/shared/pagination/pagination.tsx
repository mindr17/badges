'use client';

import s from './pagination.module.css';

interface Props {
  page: number;
}

export default function Pagination(props: Props): JSX.Element {
  const { page, setPage } = props;

  return (
    <div className={s.container}>
      <ul className={s.paginationButtons}>
        <li className={s.paginationButton}>Previous</li>
        <li className={s.paginationButton}>Next</li>
      </ul>
    </div>
  );
}
