import { homeBodyHtml } from '@/db/home-body-html';
import { tickerBadges } from '@/db/ticker';
import Body from '@/shared/body/body';
import Hero from '@/shared/hero/hero';
import MyTicker from '@/shared/my-ticker/my-ticker';
import Pinned from '@/shared/pinined/pinned';
import Search from '@/shared/search/search';
import Selected from '@/shared/selected/selected-dnd';
import CategoriesList from '@/views/home/categories-list/categories-list';

import s from './home.module.css';

export default async function Home(): Promise<JSX.Element> {
  return (
    <div className={s.container}>
      <MyTicker badges={tickerBadges} />
      <Pinned />
      <Hero />
      <Selected />
      <Search />
      <CategoriesList />
      <Body html={homeBodyHtml} />
    </div>
  );
}
