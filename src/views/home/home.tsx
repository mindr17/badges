import { tickerBadges } from '@/db/ticker';
import Hero from '@/shared/hero/hero';
import MyTicker from '@/shared/my-ticker/my-ticker';
import Pinned from '@/shared/pinined/pinned';
import Search from '@/shared/search/search';
import Selected from '@/shared/selected/selected';
import CategoriesList from '@/views/home/categories-list/categories-list';

import s from './home.module.css';

export default async function Home(): Promise<JSX.Element> {
  return (
    <div className={s.container}>
      <MyTicker badges={tickerBadges} />
      <Pinned />
      {/* <Header /> */}
      <Hero />
      <Selected />
      <Search />
      {/* <Popular /> */}
      <CategoriesList />
      {/* <MoreLink /> */}
      {/* <ButtonPrimary
        href={'/all'}
        title={'2500 badges alphabetically'}
      /> */}
    </div>
  );
}
