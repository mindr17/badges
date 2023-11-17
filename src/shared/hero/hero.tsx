import Image from 'next/image';

import Stats from '@/shared/stats/stats';

import HomeStats from '../home-stats/home-stats';
import s from './hero.module.css';

export default function Hero(): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.heroImgContainer}>
        <Image
          alt={'badges'}
          className={s.heroImg}
          fill
          priority
          src={'/hero.jpg'}
        />
        <div className={s.heroBottomShadow}></div>
      </div>
      <div className={s.content}>
        <div className={s.h1}>
          Get beautiful badges in a few clicks
        </div>
        <div className={s.description}>
          For Github profile, personal website, etc
        </div>
        <div className={s.statsContainer}>
          {/* <Stats /> */}
          <HomeStats />
        </div>
      </div>
    </div>
  );
}
