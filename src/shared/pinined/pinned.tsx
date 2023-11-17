import s from './pinned.module.css';

export default function Pinned(): JSX.Element {
  return (
    <a className={s.container} href='#selected'>
      <div className={s.description}>5 badges selected</div>
      <button className={s.grabBtn}>Grab</button>
    </a>
  );
}
