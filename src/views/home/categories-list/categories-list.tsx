import BadgeProductList from '@/shared/badge-product-list/badge-product-list';

import s from './categories-list.module.css';

export default function CategoriesList(): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.category}>
        <h3 className={s.h3}>Frontend</h3>
        <BadgeProductList />
      </div>
      <div className={s.category}>
        <h3 className={s.h3}>Backend</h3>
        <BadgeProductList />
      </div>
    </div>
  );
}
