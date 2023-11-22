import { CategoryType } from '@/types/types';

import BadgeProduct from '../badge-product/badge-product';
import s from './badge-product-list.module.css';

interface Props {
  category: CategoryType;
}

export default function BadgeProductList(props: Props): JSX.Element {
  const { category } = props;
  const { badges } = category;

  return (
    <div className={s.container}>
      {badges.map((badge, index) => {
        return <BadgeProduct badge={badge} key={index} />;
      })}
    </div>
  );
}
