import s from './hero.module.css';

export default function BadgeProduct(): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.h1}>Get beautiful badges in a few clicks</div>
      <div className={s.description}>
        For Github profile, personal website, etc
      </div>
    </div>
  );
}
