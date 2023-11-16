import BadgeProductList from '@/shared/badge-product-list/badge-product-list';

import s from './category.module.css';

export default function Category(): JSX.Element {
  return (
    <div className={s.container}>
      <BadgeProductList />
    </div>
  );
}
