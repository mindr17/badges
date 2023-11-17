import Category from '@/views/home/categories-list/category/category';

import s from './categories-list.module.css';

const categories = [
  {
    title: 'Frontend',
    badges: [
      {
        imgSrc:
          'https://camo.githubusercontent.com/1429d75133a7ceb9bdd2ef4c71dac4771ded646ba9b1ce0eaa1eacd4716a5c55/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41646f6265253230496c6c7573747261746f722d4646394130303f7374796c653d666f722d7468652d6261646765266c6f676f3d41646f6265253230496c6c7573747261746f72266c6f676f436f6c6f723d303030303030',
      },
      {
        imgSrc:
          'https://camo.githubusercontent.com/f81ac86709e8443427ddf54d3c2b11503f8e372001fbffed3c5f9bc5b795ca11/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d303030303030',
      },
    ],
  },
  {
    title: 'Backend',
    badges: [
      {
        imgSrc:
          'https://camo.githubusercontent.com/7323660ac385379c66a8a4e5bbdbe94cd10c8b46c43fc7c889ce4c53d237ab93/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d464646464646',
      },
    ],
  },
  { title: 'Design' },
  { title: 'Devops' },
  { title: 'Productivity' },
];

export default function CategoriesList(): JSX.Element {
  return (
    <div className={s.container}>
      {categories.map((category, index) => {
        return <Category category={category} key={index} />;
      })}
    </div>
  );
}
