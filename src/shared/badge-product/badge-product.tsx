/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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

const variants = {
  rotate: { rotate: [0, 45, 0], transition: { duration: 0.15 } },
  removed: { rotate: [0, -45, 0], transition: { duration: 0.15 } },
  stop: {
    y: [0, 0, 0],
    transition: { repeat: Infinity, repeatDelay: 3 },
  },
};

export default function BadgeProduct(props: Props): JSX.Element {
  const { badge } = props;
  const dispatch = useAppDispatch();
  const isSelected = useAppSelector(getSelected).selected.find(
    (storeBadge) =>
      JSON.stringify(storeBadge) === JSON.stringify(badge)
  );
  const { title, hex } = badge;

  const [removed, setRemoved] = useState(false);

  const handleSelect = () => {
    if (isSelected) {
      dispatch(deleteFromSelected(badge));
      setRemoved(true);

      return;
    }

    setRemoved(false);
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
            <motion.div
              animate={{ rotate: 360, transition: { duration: 1 } }}
            >
              <motion.div
                animate={removed ? 'removed' : 'stop'}
                variants={variants}
              >
                <motion.div
                  animate={isSelected ? 'rotate' : 'stop'}
                  variants={variants}
                >
                  <Icon html={plus2Html} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </button>
      </div>
      {/* <button className={s.moreBtn}>
        <Icon html={moreHtmlHorizontal} />
      </button> */}
    </div>
  );
}
