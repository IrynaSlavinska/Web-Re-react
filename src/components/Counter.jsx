import { useEffect, useState } from 'react';

// ! useEffect() - кейси використання
// * лише перший рендер - useEffect(() => { console.log('useEffect', Date.now()); }, []);
// * кожний рендер - useEffect(() => { console.log('useEffect', Date.now()); });
// * кожен рендер при зміні стейста чи пропса - useEffect(() => { console.log(counterA, 'useEffect', Date.now()); }, [counterA]);
// останній рендер

// ! import {memo} from 'react';
// export default memo(function Counter() { }) - аналог PureComponent для поверхневого порівняння пропсів і стейтів
// function booo() {/././././././.} - спочатку прописуємо функцію, потім екпортувати її мемоізовану версію
// export default memo(booo)

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleClickCounterA = () => {
    setCounterA(prev => prev + 1);
  };

  const handleClickCounterB = () => {
    setCounterB(prev => prev + 1);
  };

  useEffect(() => {
    console.log(counterA, 'useEffect', Date.now());
  }, [counterA]);

  useEffect(() => {
    document.title = `click ${counterA + counterB} times`;
  });

  return (
    <>
      <button type="button" onClick={handleClickCounterA}>
        Click counterA {counterA} times
      </button>

      <button type="button" onClick={handleClickCounterB}>
        Click counterB {counterB} times
      </button>
    </>
  );
}
