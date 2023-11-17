import Image from 'next/image';

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
      </div>
      <div className={s.h1}>Get beautiful badges in a few clicks</div>
      <div className={s.description}>
        For Github profile, personal website, etc
      </div>
    </div>
  );
}
