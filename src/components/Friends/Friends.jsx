import { useState, useMemo } from 'react';
import initalFriends from 'data/friends';
import styles from './Friends.module.css';

export default function Friends() {
  const [count, setCount] = useState(0);
  const [friends] = useState(initalFriends);
  const [filter, setFilter] = useState('');

  // useMemo() - для того, щоб не виконувати без потреби зайвий раз скрипт (сортуванняб фільтри)
  const visibleFriends = useMemo(() => {
    console.log('friends filter' + Date.now());
    return friends.filter(friend =>
      friend.toLocaleLowerCase().includes(filter)
    );
  }, [filter, friends]);

  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        type="button"
        onClick={() => setCount(c => c + 1)}
      >
        {count}
      </button>
      <hr />
      <input
        type="text"
        value={filter}
        className={styles.input}
        onChange={e => {
          setFilter(e.target.value);
        }}
      />
      <ul className={styles.list}>
        {visibleFriends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
