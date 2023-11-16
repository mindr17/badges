import Hero from '@/shared/hero/hero';
import Selected from '@/shared/selected/selected';
import CategoriesList from '@/views/home/categories-list/categories-list';

import s from './home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={s.container}>
      <Hero />
      <Selected />
      <CategoriesList />
    </div>
  );
}
