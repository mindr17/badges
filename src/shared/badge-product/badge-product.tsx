import Image from 'next/image';

import {
  moreHtmlVertical,
  plus2Html,
  plus3Html,
  plus4Html,
  plusHtml,
} from '@/iconsHtml/iconsHtml';

import Icon from '../icon/icon';
import s from './badge-product.module.css';

export default function BadgeProduct(): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.add}>
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
              // 'https://camo.githubusercontent.com/1429d75133a7ceb9bdd2ef4c71dac4771ded646ba9b1ce0eaa1eacd4716a5c55/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41646f6265253230496c6c7573747261746f722d4646394130303f7374796c653d666f722d7468652d6261646765266c6f676f3d41646f6265253230496c6c7573747261746f72266c6f676f436f6c6f723d303030303030'
              // 'https://camo.githubusercontent.com/6186adc7140977cdde7988ef5d35104ce658f868fd2e8eff6e392d8e28386142/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d476974487562266c6f676f436f6c6f723d464646464646'
              'https://camo.githubusercontent.com/4ed50763c79fd4067a991accc4c0dc5c687ab5020c3041b28a89d1c105e78a84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d303030303030'
            }
          />
        </div>
        <button className={s.addBtn}>
          <Icon html={plus2Html} />
        </button>
      </div>
      <button className={s.moreBtn}>
        <Icon html={moreHtmlVertical} />
      </button>
    </div>
  );
}
