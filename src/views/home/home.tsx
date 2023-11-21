import Hero from '@/shared/hero/hero';
import MoreLink from '@/shared/more-link/more-link';
import Pinned from '@/shared/pinined/pinned';
import Search from '@/shared/search/search';
import Selected from '@/shared/selected/selected';
import CategoriesList from '@/views/home/categories-list/categories-list';

import s from './home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={s.container}>
      <Pinned />
      <Hero />
      <Selected />
      <Search />
      <CategoriesList />
      {/* <MoreLink /> */}
    </div>
  );
}
