'use client';

import Ticker from 'framer-motion-ticker';
import { useState } from 'react';

import { BadgeType } from '@/types/types';

import BadgeProduct from '../badge-product/badge-product';
import s from './my-ticker.module.css';

interface Props {
  badges: BadgeType[];
}

export default function MyTicker(props: Props) {
  const { badges } = props;
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className={s.container}>
      <Ticker
        duration={50}
        isPlaying={isPlaying}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        {badges.map((badge, index) => (
          <BadgeProduct
            badge={badge}
            key={index}
            style={{ padding: '12px' }}
          />
        ))}
      </Ticker>
    </div>
  );
}
