import Link from 'next/link';
import React from 'react';

import { house } from '@/iconsHtml/iconsHtml';
import Icon from '@/shared/icon/icon';

import s from './stats.module.css';

interface Props {}

export default function Stats(props: Props) {
  // const { data } = props;
  const stats = [
    {
      title: 'Badges',
      href: '',
      count: 2904,
    },
  ];

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {stats.map((stat, index) => {
          const content = (
            <div className={s.content}>
              <Icon html={house} />
              <div className={s.text}>
                {stat.title}
                <div className={s.count}>{stat.count}</div>
              </div>
            </div>
          );
          const item = <div className={s.itemWrapper}>{content}</div>;
          const itemLink = (
            <Link className={s.itemWrapper} href={stat.href}>
              {content}
            </Link>
          );

          return (
            <li className={s.item} key={index}>
              {stat?.href.length > 0 ? itemLink : item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

{
  /* <div className={s.info}>
          <div className={s.infoItem}>
            {icons.checkMarkRounded}
            <p className={s.item}>
              {getNumWordCase((searchData || data).cities[0].clubs?.length ?? 0, [
                'клуб',
                'клуба',
                'клубов',
              ])}
            </p>
          </div>
        </div> */
}
