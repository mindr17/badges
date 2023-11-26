'use client';

import { useEffect, useState } from 'react';

import { BadgeType } from '@/types/types';

import BadgeProduct from '../badge-product/badge-product';
import s from './search.module.css';

const fetchData = async () => {
  const data = await import('../../badges-db.json');

  // const response = await fetch(`${config.apiRoutesUrl}/api?type=db`);

  // const countData = await response.json();

  return data;
};

export default function Search(): JSX.Element {
  const [allBadges, setAllBadges] = useState<BadgeType[]>([]);
  const [searchResults, setSearchResults] = useState<BadgeType[]>([]);
  const [searchString, setSearchString] = useState<string>('');
  // const [debouncedSting, setDebouncedString] = useState('');

  useEffect(() => {
    fetchData().then((data) => setAllBadges(data?.default?.icons));

    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchString('');
      }
    };

    const escListener = window.addEventListener(
      'keydown',
      escHandler
    );

    return () => {
      window.removeEventListener('keydown', escListener);
    };
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(
  //     () => setDebouncedString(searchString),
  //     100
  //   );

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [searchString]);

  useEffect(() => {
    if (!searchString || searchString.length < 1) {
      setSearchResults([]);

      return;
    }

    setSearchResults(() => {
      const filtered = allBadges.filter((icon) => {
        const { title } = icon;

        if (
          title?.toLowerCase().includes(searchString.toLowerCase())
        ) {
          return true;
        }
      });

      return filtered.splice(0, 5);
    });
  }, [allBadges, searchString]);

  return (
    <div className={s.container} id='search'>
      <h2 className={s.h2}>Search</h2>
      <div className={s.wrapper}>
        <div className={s.search}>
          <input
            className={s.input}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder='Start typing...'
            type='text'
            value={searchString}
          />
          {/* <button aria-label='поиск' className={s.btn}>
            
          </button> */}
        </div>
      </div>
      <div className={s.searchResults}>
        {searchResults.map((item, index) => {
          return <BadgeProduct badge={item} key={index} />;
        })}
      </div>
    </div>
  );
}
