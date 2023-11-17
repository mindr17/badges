import Link from 'next/link';
import React from 'react';

import { getWordCase } from '@/helpers/get-word-case';

// import { Icon, iconsHtml } from '@/src/components/icons/icons';
import s from './home-stats.module.css';

interface Props {}

const HomeStats = ({ data }: Props) => {
  const citiesCountTitle = getWordCase(2904, [
    'Город',
    'Города',
    'Городов',
  ]);
  const clubsCountTitle = getWordCase(2904, [
    'Клуб',
    'Клуба',
    'Клубов',
  ]);
  const onlineCountTitle = getWordCase(2904, [
    'Платформа',
    'Платформы',
    'Платформ',
  ]);
  // const onlineCountTitle = 'Онлайн';

  return (
    <div className={s.container}>
      <div className={s.main}>
        <Link
          className={classNames(s.link, s.clubs)}
          href={'/cities'}
        >
          <div className={classNames(s.h3, s.red)}>
            {citiesCountTitle}
          </div>
          <p className={s.count}>{citiesCount}</p>
          <img
            alt='cities'
            className={s.icon}
            src='/icons/home/clubs.svg'
          />
        </Link>
        <Link
          className={classNames(s.link, s.ratings)}
          href={'/cities'}
        >
          <div className={classNames(s.h3, s.yellow)}>
            {clubsCountTitle}
          </div>
          <p className={s.count}>{clubsCount}</p>
          <div className={s.icon}>
            <Icon html={iconsHtml.people} />
          </div>
        </Link>
        <Link
          className={classNames(s.link, s.cities)}
          href={'/online'}
        >
          <div className={classNames(s.h3, s.green)}>
            {onlineCountTitle}
          </div>
          <p className={s.count}>
            {data?.online_aggregated?.[0]?.count?.id ?? 0}
          </p>
          <img
            alt='online'
            className={s.icon}
            src='/icons/home/cities.svg'
          />
        </Link>
      </div>
      {/* <ul className={s.additional}>
        <li className={s.item}>
          <p className={s.text}>Игры</p>
          <img src='/icons/home/frame.svg' alt='frame' className={s.img} />
        </li>
        <li className={s.item}>
          <p className={s.text}>Медиа</p>
          <img src='/icons/home/frame.svg' alt='frame' className={s.img} />
        </li>
        <li className={s.item}>
          <p className={s.text}>Аналитика</p>
          <img src='/icons/home/frame.svg' alt='frame' className={s.img} />
        </li>
        <li className={s.item}>
          <p className={s.text}>Обучение</p>
          <img src='/icons/home/frame.svg' alt='frame' className={s.img} />
        </li>
      </ul> */}
    </div>
  );
};

export default HomeStats;
