import { useSelector, useDispatch } from 'react-redux';
import { update, getClicksValue } from '../redux/clickSlice';

export const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(getClicksValue);
  // console.log(count);
  // console.log(update());
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Number of clicks: {count}</h1>
      <button type="button" onClick={() => dispatch(update(5))}>
        Add 5 clicks
      </button>
      <button type="button" onClick={() => dispatch(update(10))}>
        Add 10 clicks
      </button>
      <button type="button" onClick={() => dispatch(update(20))}>
        Add 20 clicks
      </button>
      {/* <button type="button" onClick={() => dispatch(update())}>
        number of clicks: {count}
      </button> */}
    </div>
  );
};
