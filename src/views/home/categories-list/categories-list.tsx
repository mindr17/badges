import { categories } from '@/helpers/db';
import Category from '@/views/home/categories-list/category/category';

import s from './categories-list.module.css';

export default function CategoriesList(): JSX.Element {
  return (
    <div className={s.container}>
      {categories.map((category, index) => {
        return <Category category={category} key={index} />;
      })}
    </div>
  );
}
