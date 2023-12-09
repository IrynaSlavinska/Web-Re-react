import { useState, useEffect, useRef } from 'react';
import styles from './SkipFirstUseEffect.module.css';

// useRef() - значення яке не змінюється між рендерами;

export default function SkipEffectOnFirstRender() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log(`Выполняется useEffect - ${Date.now()}`);
  });

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => setCount(c => c + 1)}>
        {count}
      </button>
      <p>UseEffect is absent on first render</p>
    </div>
  );
}
