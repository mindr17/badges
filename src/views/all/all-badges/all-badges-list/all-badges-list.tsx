'use client';

import { useState } from 'react';

import BadgeProduct from '@/shared/badge-product/badge-product';
import { BadgeType } from '@/types/types';

import s from './all-badges-list.module.css';

interface Props {
  badges: BadgeType[];
}

export default function AllBadgesList(props: Props): JSX.Element {
  const { badges } = props;
  const [badgesCount, setBadgesCount] = useState<number>(100);
  const badgesSliced = badges.slice(0, badgesCount);

  return (
    <ul className={s.container}>
      {badgesSliced.map((icon, index) => {
        if (index > 100) return;

        return (
          <li className={s.wrapper} key={index}>
            <BadgeProduct badge={icon} />
          </li>
        );
      })}
    </ul>
  );
}
