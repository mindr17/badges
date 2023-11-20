import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { formatNumberWithCommas } from '@/helpers/helpers';

import s from './counter.module.css';

interface Props {
  from: number;
  to: number;
}

export default function Counter(props: Props) {
  const { from, to } = props;
  const ref = useRef();

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1,

      onUpdate(value) {
        ref.current.textContent = value.toFixed();
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <div className={s.container} ref={ref} />;
}
