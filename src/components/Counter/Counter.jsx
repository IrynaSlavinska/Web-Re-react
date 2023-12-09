import { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <p className={styles.value}>{count}</p>
      <button
        type="button"
        onClick={() => setCount(state => state + 1)}
        className={styles.btn}
      >
        Increase
      </button>
      <button
        type="button"
        onClick={() => setCount(state => state - 1)}
        className={styles.btn}
      >
        Decrease
      </button>
    </div>
  );
}
