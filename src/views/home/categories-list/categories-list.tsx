'use client';

import { useEffect, useState } from 'react';

import { categories } from '@/helpers/db';
import Category from '@/views/home/categories-list/category/category';

import s from './categories-list.module.css';

export default function CategoriesList(): JSX.Element {
  const [categoriesCount, setCategoriesCount] = useState<number>(8);

  const categoriesSliced = categories.slice(0, categoriesCount);
  const isAllLoaded = categoriesSliced.length === categories.length;

  const loadMoreItems = () =>
    setCategoriesCount(
      (prevCategoriesCount) => prevCategoriesCount + 8
    );

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    loadMoreItems();
  };

  // Use MutationObserver()
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          onClick={loadMoreItems}
        >
          Load more categories
        </button>
      )}
    </div>
  );
}
