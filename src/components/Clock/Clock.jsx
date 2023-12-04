import { useEffect, useState, useRef } from 'react';
import styles from './Clock.module.css';

function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Interval each 2000 ms' + Date.now());
      setTime(new Date());
    }, 2000);

    return () => {
      console.log('Это функция очистки перед следующим вызовом useEffect');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Current time: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop} className={styles.clockBtn}>
        Stop
      </button>
    </div>
  );
}

export default Clock;

// ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?

// import { Component } from 'react';
// import styles from './Clock.module.css';

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
// return (
//   <div className={styles.container}>
//     <p className={styles.clockface}>
//       Current time: {this.state.time.toLocaleTimeString()}
//     </p>
//     <button type="button" onClick={this.stop}>
//       Stop
//     </button>
//   </div>
// );
//   }
// }
