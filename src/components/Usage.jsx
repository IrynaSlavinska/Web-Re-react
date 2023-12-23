import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/store';

export const Usage = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => dispatch(increment(50))}>Increment</button>
      <button onClick={() => dispatch(decrement(10))}>Decrement</button>
    </div>
  );
};
