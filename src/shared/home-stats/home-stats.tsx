import { clsx } from 'clsx';
import React from 'react';

import { getWordCase } from '@/helpers/get-word-case';
import { iconsStatsHtml } from '@/iconsHtml/iconsHtml';
import Icon from '@/shared/icon/icon';

import s from './home-stats.module.css';

const HomeStats = () => {
  const clubsCount = 2904;
  const clubsCountTitle = getWordCase(clubsCount, [
    'Icon',
    'Icons',
    'Icons',
  ]);

  return (
    <div className={s.container}>
      <div className={s.main}>
        <div className={clsx(s.link, s.cities)}>
          <div className={clsx(s.h3, s.green)}>{clubsCountTitle}</div>
          <div className={s.count}>{clubsCount}</div>
          <div className={s.icon}>
            <Icon html={iconsStatsHtml} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
