import { useAppSelector } from '@/store/hooks';
import { getSelected } from '@/store/selected-slice/selected-slice';

import s from './pinned.module.css';

export default function Pinned(): JSX.Element {
  const selectedBadges = useAppSelector(getSelected).selected;

  return (
    <a className={s.container} href='#selected'>
      <div className={s.description}>
        {selectedBadges && selectedBadges.length} badges selected
      </div>
      <button className={s.grabBtn}>Grab</button>
    </a>
  );
}
