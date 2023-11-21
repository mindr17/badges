// import allBadges from '@/badges-db.json';
import BadgeProduct from '@/shared/badge-product/badge-product';

import s from './all-badges.module.css';

const fetchData = async () => {
  const data = await import('../../../badges-db.json');

  // const response = await fetch(`${config.apiRoutesUrl}/api?type=db`);

  // const countData = await response.json();

  return data;
};

export default async function AllBadges(): Promise<JSX.Element> {
  const allBadges = await fetchData();

  return (
    <div className={s.container}>
      {allBadges.icons.map((icon, index) => {
        if (index > 100) return;

        return (
          <div className={s.wrapper} key={index}>
            <BadgeProduct badge={icon} />
          </div>
        );
      })}
    </div>
  );
}
