/* eslint-disable @next/next/no-img-element */
import { useAppSelector } from '@/store/hooks';
import { getSelected } from '@/store/selected-slice/selected-slice';

import s from './selected.module.css';

// const badgesImages = [
//   'https://camo.githubusercontent.com/f81ac86709e8443427ddf54d3c2b11503f8e372001fbffed3c5f9bc5b795ca11/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d303030303030',
//   'https://camo.githubusercontent.com/da0bc973dda6482a23167ecb893d498cc26eb60a44e517537b2e2aa32d3ef761/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666f722d7468652d6261646765266c6f676f3d476974266c6f676f436f6c6f723d464646464646',
//   'https://camo.githubusercontent.com/1429d75133a7ceb9bdd2ef4c71dac4771ded646ba9b1ce0eaa1eacd4716a5c55/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41646f6265253230496c6c7573747261746f722d4646394130303f7374796c653d666f722d7468652d6261646765266c6f676f3d41646f6265253230496c6c7573747261746f72266c6f676f436f6c6f723d303030303030',
//   'https://camo.githubusercontent.com/ed54f065c111ff68bc8968a8adc563ec9aab057fc114acbbde599f606bce15f2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41646f626525323050686f746f73686f702d3331413846463f7374796c653d666f722d7468652d6261646765266c6f676f3d41646f626525323050686f746f73686f70266c6f676f436f6c6f723d464646464646',
//   'https://camo.githubusercontent.com/de81c7c6aea875388d2b1eebd86e05f2a628281bdf79e7db7c6c46738f21e483/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374726170692d3439343546463f7374796c653d666f722d7468652d6261646765266c6f676f3d537472617069266c6f676f436f6c6f723d464646464646',
//   'https://camo.githubusercontent.com/167123f8db1dc5aa8afd4a045477160aa3fd429578ea4f658c1d72030889c84e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f47686f73742d3135313731413f7374796c653d666f722d7468652d6261646765266c6f676f3d47686f7374266c6f676f436f6c6f723d464646464646',
//   'https://camo.githubusercontent.com/871bd3fe3b1d983ee82580d1bdcf91f7abd02ecc25a28f28a27f8f047d6dc6f1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f537761676765722d3835454132443f7374796c653d666f722d7468652d6261646765266c6f676f3d53776167676572266c6f676f436f6c6f723d303030303030',
//   'https://camo.githubusercontent.com/f2009c37ee59f56f038973e9b3049709419c41ac5346ffc6858c2cdc6deabb07/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5075707065746565722d3430423541343f7374796c653d666f722d7468652d6261646765266c6f676f3d507570706574656572266c6f676f436f6c6f723d464646464646',
// ];

export default function Selected(): JSX.Element {
  // const dispatch = useAppDispatch();
  const selectedBadges = useAppSelector(getSelected).selected;

  return (
    <div className={s.container}>
      <h2 className={s.h2}>Selected badges</h2>
      {/* <div className={s.topControls}></div> */}
      <div className={s.wrapper}>
        <div className={s.selected}>
          <div className={s.badgesList}>
            {/* {badgesImages.map((imgSrc, index) => (
              <img
                alt={''}
                className={s.imgStandard}
                key={index}
                src={imgSrc}
              />
            ))} */}
            {selectedBadges?.map((badge, index) => {
              const { title, hex } = badge;

              return (
                <img
                  alt={title}
                  className={s.imgStandard}
                  key={index}
                  src={`https://img.shields.io/badge/${title}-${hex}?style=for-the-badge&logo=${title}&logoColor=${'FFF'}`}
                />
              );
            })}
          </div>
        </div>
        <div className={s.controls}>
          <div className={`${s.control} ${s.clear}`}>Clear</div>
          <div className={s.control}>Copy HTML</div>
          <div className={`${s.control} ${s.copyMarkdown}`}>
            Copy Markdown
          </div>
        </div>
      </div>
    </div>
  );
}
