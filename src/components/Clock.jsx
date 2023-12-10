import { useEffect, useRef, useState } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const intervalId = useRef();
  console.log(intervalId);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      //   console.log('this is interval each 1000ms' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('function before useEffect()');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <p>Current Time: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
}
