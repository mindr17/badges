import BadgeProductList from '@/shared/badge-product-list/badge-product-list';
import { CategoryType } from '@/types/types';

import s from './category.module.css';

interface Props {
  category: CategoryType;
}

export default function Category(props: Props): JSX.Element {
  const { category } = props;
  const { title } = category;

  return (
    <div className={s.container}>
      <h3 className={s.h3}>{title}</h3>
      <BadgeProductList category={category} />
      <button className={s.more}>More {title}</button>
    </div>
  );
}
