import React from 'react';

import { formatNumberWithCommas } from '@/helpers/helpers';
import {
  iconsStatsHtml,
  iconsTotalBadges,
  packsBadgesCountHtml,
} from '@/iconsHtml/iconsHtml';
import Icon from '@/shared/icon/icon';

import s from './home-stats.module.css';

export default function HomeStats(): JSX.Element {
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
    // {
    //   title: 'Badges grabbed',
    //   count: 291234234,
    //   containerStyle: s.cities,
    //   titleStyle: s.green,
    //   iconHtml: iconsStatsHtml,
    // },
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
