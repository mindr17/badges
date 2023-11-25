'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { ActionCreators } from 'redux-undo';

import { copyHtml } from '@/helpers/selected/copy-html';
import { copyMd } from '@/helpers/selected/copy-md';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  clearSelected,
  deleteFromSelected,
  getSelected,
} from '@/store/selected-slice/selected-slice';
import { addCount } from '@/store/stats-slice/add-count-thunk';

import s from './selected.module.css';

export default function Selected(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedBadges = useAppSelector(getSelected).selected;
  const [mdCopied, setMdCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const handleCopyMd = () => {
    copyMd(selectedBadges);
    setMdCopied(true);

    if (selectedBadges.length < 1) return;

    dispatch(addCount(selectedBadges.length || 0));
  };

  const handleCopyHtml = () => {
    copyHtml(selectedBadges);
    setHtmlCopied(true);

    if (selectedBadges.length < 1) return;

    dispatch(addCount(selectedBadges.length || 0));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMdCopied(false);
      setHtmlCopied(false);
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
            {selectedBadges && selectedBadges.length > 0
              ? selectedBadges?.map((badge, index) => {
                  const { title, hex } = badge;

                  return (
                    <img
                      alt={title}
                      className={s.imgStandard}
                      key={index}
                      onClick={() =>
                        dispatch(deleteFromSelected(badge))
                      }
                      src={`https://img.shields.io/badge/${title}-${hex}?style=for-the-badge&logo=${title}&logoColor=${'FFF'}`}
                      suppressHydrationWarning
                    />
                  );
                })
              : 'Start by clicking on badges below'}
          </div>
        </div>
        <div className={s.controls}>
          <div
            className={`${s.control} ${s.undo}`}
            onClick={() => dispatch(ActionCreators.undo())}
          >
            Undo
          </div>
          <div
            className={`${s.control} ${s.clear}`}
            onClick={() => dispatch(clearSelected())}
          >
            Clear
          </div>
          {/* <div className={s.control}>Copy HTML</div> */}
          <button
            className={`${s.control} ${s.copyHtml}`}
            onClick={handleCopyHtml}
          >
            {htmlCopied ? 'Copied!' : 'Copy Html'}
          </button>
          <button
            className={`${s.control} ${s.copyMarkdown}`}
            onClick={handleCopyMd}
          >
            {mdCopied ? 'Copied!' : 'Copy Markdown'}
          </button>
        </div>
      </div>
    </div>
  );
}