'use client';

import Link from 'next/link';
import { useState } from 'react';

import { categories } from '@/helpers/db';
import Category from '@/views/home/categories-list/category/category';

import s from './categories-list.module.css';

export default function CategoriesList(): JSX.Element {
  const [categoriesCount, setCategoriesCount] = useState<number>(8);
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
              (prevCategoriesCount) => prevCategoriesCount + 8
            )
          }
        >
          Load more categories
        </button>
      )}
    </div>
  );
}
