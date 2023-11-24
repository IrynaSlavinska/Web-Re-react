const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="CounterContols">
      <button type="button" onClick={onIncrement} className="CounterBtn">
        Increase
      </button>
      <button type="button" onClick={onDecrement} className="CounterBtn">
        Decrease
      </button>
    </div>
  );
};
export default Controls;
