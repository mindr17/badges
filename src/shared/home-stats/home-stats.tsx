import React from 'react';

import {
  iconsStatsHtml,
  iconsTotalBadges,
} from '@/iconsHtml/iconsHtml';
import Icon from '@/shared/icon/icon';

import s from './home-stats.module.css';

export default function HomeStats(): JSX.Element {
  const clubsCount = 2904;

  return (
    <div className={s.container}>
      <div className={`${s.link} ${s.cities}`}>
        {/* <div className={`${s.h3} ${s.green}`}>{clubsCountTitle}</div> */}
        <div className={`${s.h3} ${s.green}`}>Badges in library</div>
        <div className={s.count}>{clubsCount}</div>
        <div className={s.icon}>
          <Icon html={iconsTotalBadges} />
        </div>
      </div>
      <div className={`${s.link} ${s.cities}`}>
        {/* <div className={`${s.h3} ${s.green}`}>{clubsCountTitle}</div> */}
        <div className={`${s.h3} ${s.green}`}>Badges in library</div>
        <div className={s.count}>{clubsCount}</div>
        <div className={s.icon}>
          <Icon html={iconsStatsHtml} />
        </div>
      </div>
    </div>
  );
}
