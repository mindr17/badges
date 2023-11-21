'use client';

import { useState } from 'react';

import { categories } from '@/helpers/db';
import Category from '@/views/home/categories-list/category/category';

import s from './categories-list.module.css';

export default function CategoriesList(): JSX.Element {
  const [categoriesCount, setCategoriesCount] = useState<number>(6);
  const categoriesSliced = categories.slice(0, categoriesCount);
  const isAllLoaded = categoriesSliced.length === categories.length;

  return (
    <div className={s.container}>
      <div className={s.list}>
        {categoriesSliced.map((category, index) => {
          return <Category category={category} key={index} />;
        })}
      </div>
      {isAllLoaded ? (
        ''
      ) : (
        <button
          className={`${s.loadMore} ${s.allLoaded}`}
          onClick={() =>
            setCategoriesCount(
              (prevCategoriesCount) => prevCategoriesCount + 4
            )
          }
        >
          {isAllLoaded
            ? 'All categories loaded'
            : 'Load more categories'}
        </button>
      )}
    </div>
  );
}
