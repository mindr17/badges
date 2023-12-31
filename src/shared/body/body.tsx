'use client';

import { useState } from 'react';

import { arrowUp } from '@/iconsHtml/iconsHtml';
import Icon from '@/shared/icon/icon';

import s from './body.module.css';

interface Props {
  html: string;
}

export default function Body(props: Props): JSX.Element {
  const { html } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className={s.text}
        dangerouslySetInnerHTML={{ __html: html || '' }}
      />
      <button className={s.button} onClick={() => setOpen(!isOpen)}>
        <div className={!isOpen ? s.arrow : ''}>
          <Icon html={arrowUp} />
        </div>
      </button>
    </>
  );
}
