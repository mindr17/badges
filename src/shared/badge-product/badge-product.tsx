import Image from 'next/image';

import s from './badge-product.module.css';

export default function BadgeProduct(): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.badge}>
        {/* <Image
          alt={''}
          fill
          src={
            'https://camo.githubusercontent.com/f81ac86709e8443427ddf54d3c2b11503f8e372001fbffed3c5f9bc5b795ca11/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d303030303030'
          }
        /> */}
        {/* <div className={s.badgeImaContainer}>
          <Image
            alt={''}
            fill
            src={
              'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=000000'
            }
          />
        </div> */}
        <img
          alt={''}
          className={s.imgStandard}
          src={
            'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=000000'
          }
        />
      </div>
      <div className={s.controlsList}>
        <button className={`${s.control} ${s.add}`}>Add</button>
        <button className={`${s.control} ${s.more}`}>...</button>
      </div>
    </div>
  );
}
