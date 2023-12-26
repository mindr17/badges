import Image from 'next/image';

import HomeStats from '@/shared/home-stats/home-stats';

import heroImg from '../../../public/hero.jpg';
import s from './hero.module.css';

export default function Hero(): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.heroImgContainer}>
        <Image
          alt='badges hero image'
          className={s.heroImg}
          fill
          priority
          quality={10}
          sizes='(max-width: 768px) 50vw,
                100vw'
          src={heroImg}
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
        {/* <div className={s.description}>
          and join
          <a
            className={s.telegram}
            href='https://t.me/badges_chat'
            target='_blank'
          >
            telegram chat!
          </a>
        </div> */}
        <div className={s.statsContainer}>
          {/* <Stats /> */}
          <HomeStats />
        </div>
      </div>
    </div>
  );
}
