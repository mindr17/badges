/* eslint-disable @next/next/no-img-element */
'use client';

import { moreHtmlHorizontal, plus2Html } from '@/iconsHtml/iconsHtml';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addToSelected,
  deleteFromSelected,
  getSelected,
} from '@/store/selected-slice/selected-slice';
import { BadgeType } from '@/types/types';

import Icon from '../icon/icon';
import s from './badge-product.module.css';

interface Props {
  badge: BadgeType;
}

export default function BadgeProduct(props: Props): JSX.Element {
  const { badge } = props;
  const isSelected = useAppSelector(getSelected);
  const dispatch = useAppDispatch();

  const { title, hex, source } = badge;

  const handleSelect = () => {
    if (isSelected) {
      dispatch(deleteFromSelected(badge));

      return;
    }

    dispatch(addToSelected(badge));
  };

  return (
    <div className={s.container}>
      <div className={s.add} onClick={handleSelect}>
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
          {/* <img
            alt={title}
            className={s.imgStandard}
            src={source}
            // style={{ backgroundColor: 'hex' }}
          /> */}
          <img
            alt={title}
            className={s.imgStandard}
            src={`https://img.shields.io/badge/${title}-${hex}?style=for-the-badge&logo=${title}&logoColor=${'FFF'}`}
          />
        </div>
        <button className={`${isSelected ? s.selected : s.addBtn}`}>
          <div className={isSelected ? s.selectedIcon : s.addIcon}>
            <Icon html={plus2Html} />
          </div>
        </button>
      </div>
      <button className={s.moreBtn}>
        <Icon html={moreHtmlHorizontal} />
      </button>
    </div>
  );
}
