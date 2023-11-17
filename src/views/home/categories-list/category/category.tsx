import BadgeProductList from '@/shared/badge-product-list/badge-product-list';

import s from './category.module.css';

interface Props {
  category: any;
}

export default function Category(props: Props): JSX.Element {
  const { category } = props;
  const { title } = category;

  return (
    <div className={s.category}>
      <h3 className={s.h3}>{title}</h3>
      <BadgeProductList />
    </div>
  );
}
