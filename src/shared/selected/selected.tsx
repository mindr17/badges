import s from './selected.module.css';

export default function BadgeProduct(): JSX.Element {
  return (
    <div className={s.container}>
      <h2 className={s.h2}>Selected badges</h2>
      <div className={s.topControls}></div>
      <div className={s.wrapper}>
        <div className={s.selected}>
          <img
            alt={''}
            className={s.imgStandard}
            src={
              'https://camo.githubusercontent.com/1429d75133a7ceb9bdd2ef4c71dac4771ded646ba9b1ce0eaa1eacd4716a5c55/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41646f6265253230496c6c7573747261746f722d4646394130303f7374796c653d666f722d7468652d6261646765266c6f676f3d41646f6265253230496c6c7573747261746f72266c6f676f436f6c6f723d303030303030'
              // 'https://camo.githubusercontent.com/6186adc7140977cdde7988ef5d35104ce658f868fd2e8eff6e392d8e28386142/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d476974487562266c6f676f436f6c6f723d464646464646'
            }
          />
          <img
            alt={''}
            className={s.imgStandard}
            src={
              'https://camo.githubusercontent.com/1429d75133a7ceb9bdd2ef4c71dac4771ded646ba9b1ce0eaa1eacd4716a5c55/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41646f6265253230496c6c7573747261746f722d4646394130303f7374796c653d666f722d7468652d6261646765266c6f676f3d41646f6265253230496c6c7573747261746f72266c6f676f436f6c6f723d303030303030'
              // 'https://camo.githubusercontent.com/6186adc7140977cdde7988ef5d35104ce658f868fd2e8eff6e392d8e28386142/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d476974487562266c6f676f436f6c6f723d464646464646'
            }
          />
          <img
            alt={''}
            className={s.imgStandard}
            src={
              'https://camo.githubusercontent.com/1429d75133a7ceb9bdd2ef4c71dac4771ded646ba9b1ce0eaa1eacd4716a5c55/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41646f6265253230496c6c7573747261746f722d4646394130303f7374796c653d666f722d7468652d6261646765266c6f676f3d41646f6265253230496c6c7573747261746f72266c6f676f436f6c6f723d303030303030'
              // 'https://camo.githubusercontent.com/6186adc7140977cdde7988ef5d35104ce658f868fd2e8eff6e392d8e28386142/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d476974487562266c6f676f436f6c6f723d464646464646'
            }
          />
        </div>
        <div className={s.controls}>
          <div className={`${s.control} ${s.clear}`}>Clear</div>
          <div className={s.control}>Copy html</div>
          <div className={s.control}>Copy Markdown</div>
        </div>
      </div>
    </div>
  );
}
