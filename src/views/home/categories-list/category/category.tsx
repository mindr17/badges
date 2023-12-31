'use client';

import { useEffect, useState } from 'react';

import BadgeProductList from '@/shared/badge-product-list/badge-product-list';
import { CategoryType } from '@/types/types';

import s from './category.module.css';

interface Props {
  category: CategoryType;
}

export default function Category(props: Props): JSX.Element {
  const { category } = props;
  const { title } = category;
  const [isMoreClicked, setIsMoreClicked] = useState(false);

  const handleMoreClick = () => {
    setIsMoreClicked(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMoreClicked(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isMoreClicked]);

  return (
    <div className={s.container}>
      <h3 className={s.h3}>{title}</h3>
      <BadgeProductList category={category} />
      <button className={s.more} onClick={handleMoreClick}>
        {isMoreClicked ? (
          <div>
            Use{' '}
            <a className={s.telegram} href='#search'>
              search
            </a>{' '}
            for more {title}
          </div>
        ) : (
          `More ${title}`
        )}
      </button>
    </div>
  );
}
