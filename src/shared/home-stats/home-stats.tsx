import React from 'react';

import { formatNumberWithCommas } from '@/helpers/helpers';
import {
  iconsStatsHtml,
  iconsTotalBadges,
} from '@/iconsHtml/iconsHtml';
import Icon from '@/shared/icon/icon';

import s from './home-stats.module.css';

export default function HomeStats(): JSX.Element {
  const badgesCount = 2904;
  const grabbedCount = 291234;

  return (
    <div className={s.container}>
      <div className={`${s.link} ${s.clubs}`}>
        <div className={`${s.h3} ${s.red}`}>Badges in library</div>
        <div className={s.count}>
          {formatNumberWithCommas(badgesCount)}
        </div>
        <div className={s.icon}>
          <Icon html={iconsTotalBadges} />
        </div>
      </div>
      <div className={`${s.link} ${s.cities}`}>
        <div className={`${s.h3} ${s.green}`}>Badges grabbed</div>
        <div className={s.count}>
          {formatNumberWithCommas(grabbedCount)}
        </div>
        <div className={s.icon}>
          <Icon html={iconsStatsHtml} />
        </div>
      </div>
    </div>
  );
}
