/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

import { copyMd } from '@/helpers/selected/copy-md';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  clearSelected,
  deleteFromSelected,
  getSelected,
} from '@/store/selected-slice/selected-slice';

import s from './selected.module.css';

export default function Selected(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedBadges = useAppSelector(getSelected).selected;
  const [mdCopied, setMdCopied] = useState(false);

  const handleCopyMd = () => {
    copyMd(selectedBadges);
    setMdCopied(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMdCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [mdCopied]);

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
                  onClick={() => dispatch(deleteFromSelected(badge))}
                  src={`https://img.shields.io/badge/${title}-${hex}?style=for-the-badge&logo=${title}&logoColor=${'FFF'}`}
                />
              );
            })}
          </div>
        </div>
        <div className={s.controls}>
          <div
            className={`${s.control} ${s.clear}`}
            onClick={() => dispatch(clearSelected())}
          >
            Clear
          </div>
          {/* <div className={s.control}>Copy HTML</div> */}
          <div
            className={`${s.control} ${s.copyMarkdown}`}
            onClick={handleCopyMd}
          >
            {mdCopied ? 'Copied!' : 'Copy Markdown'}
          </div>
        </div>
      </div>
    </div>
  );
}
