import { useReducer } from 'react';
// import { useState } from 'react';
import styles from './Counter.module.css';

// function countReducer(prevState, nextState) {
//   return prevState + nextState;
//   // prevState - актуальне значення каунтера, а nextState - це setCount(1) - 1
// }

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + action.payload;

    case 'decrement':
      return state - action.payload;

    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

// useReducer - це функція, яка автоматично отримує під капотом актуальне попереднє значення на момент виклику і дію, яку необхідно зробити з цим станом
// у дії обов'язково має бути тип і пейлоад
// стейт не обов'язково має бути примітивом (число, рядок, буль), може бути і об'єкт

export default function CounterUseReducer() {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(countReducer, 0);
  // const [state, dispatch] = useReducer(reducer, initialState);

  //
  return (
    <div className={styles.container}>
      <p style={{ fontSize: 32 }}>useReducer()</p>
      <p className={styles.value}>{count}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
        className={styles.btn}
      >
        Increase
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
        className={styles.btn}
      >
        Decrease
      </button>
    </div>
  );
}
