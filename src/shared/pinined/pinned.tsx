import s from './pinned.module.css';

export default function Pinned(): JSX.Element {
  return (
    <div className={s.container}>
      <div className={s.description}>5 badges selected</div>
      <button className={s.grabBtn}>Grab</button>
    </div>
  );
}
