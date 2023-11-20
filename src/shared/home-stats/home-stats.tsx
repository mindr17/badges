'use client';

import React, { useEffect } from 'react';

import { formatNumberWithCommas } from '@/helpers/helpers';
import {
  iconsStatsHtml,
  iconsTotalBadges,
} from '@/iconsHtml/iconsHtml';
import Icon from '@/shared/icon/icon';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCount } from '@/store/stats-slice/get-count-thunk';
import { setCount } from '@/store/stats-slice/set-count-thunk';

import s from './home-stats.module.css';

export default function HomeStats(): JSX.Element {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.stats);

  useEffect(() => {
    dispatch(setCount());
    dispatch(getCount());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // const count = useAppSelector(getStats);
  // console.log('count: ', count);
  // const response = await fetch(
  //   'https://api.mafia.game/badges_stats/copied_count?access_token='
  // );

  // const count = await response.json();
  // console.log('count: ', count);

  const stats = [
    {
      title: 'Badges in library',
      count: 2500,
      containerStyle: s.clubs,
      titleStyle: s.red,
      iconHtml: iconsTotalBadges,
    },
    // {
    //   title: 'Starter packs',
    //   count: 2325,
    //   containerStyle: s.ratings,
    //   titleStyle: s.yellow,
    //   iconHtml: packsBadgesCountHtml,
    // },
    {
      title: 'Badges grabbed',
      count,
      containerStyle: s.cities,
      titleStyle: s.green,
      iconHtml: iconsStatsHtml,
    },
  ];

  return (
    <div className={s.container} id='selected'>
      {stats.map((stat, index) => {
        const { title, count, containerStyle, titleStyle, iconHtml } =
          stat;

        return (
          <div className={`${s.link} ${containerStyle}`} key={index}>
            <div className={`${s.h3} ${titleStyle}`}>{title}</div>
            <div className={s.count}>
              {formatNumberWithCommas(count)}
            </div>
            <div className={s.icon}>
              <Icon html={iconHtml} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
