import BadgeProduct from '../badge-product/badge-product';
import s from './badge-product-list.module.css';

export default function BadgeProductList(): JSX.Element {
  return (
    <div className={s.container}>
      <BadgeProduct />
      <BadgeProduct />
      <BadgeProduct />
      <BadgeProduct />
    </div>
  );
}
