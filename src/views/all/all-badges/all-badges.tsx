import s from './all-badges.module.css';
import AllBadgesList from './all-badges-list/all-badges-list';

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
      <h2 className={s.h2}>All badges</h2>
      <AllBadgesList badges={allBadges.icons} />
    </div>
  );
}
