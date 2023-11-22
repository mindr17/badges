import BackButton from '@/shared/back-button/back-button';
import Pinned from '@/shared/pinined/pinned';
import Search from '@/shared/search/search';
import Selected from '@/shared/selected/selected';
import AllBadges from '@/views/all/all-badges/all-badges';

import s from './all.module.css';

export default function All(): JSX.Element {
  return (
    <div className={s.container}>
      {/* <Header /> */}
      <BackButton />
      <Pinned />
      <div className={s.smallHero}></div>
      <Selected />
      <Search />
      <AllBadges />
      {/* <MoreLink /> */}
    </div>
  );
}
