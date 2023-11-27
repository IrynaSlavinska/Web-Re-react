import './Reader.css';

const Controls = ({ index, TotalItems, changeIndex }) => {
  return (
    <section className="BtnSection">
      <button
        type="button"
        disabled={index === 1}
        onClick={() => changeIndex(-1)}
        className="ControlBtn"
      >
        Prev
      </button>
      <button
        type="button"
        disabled={index === TotalItems}
        onClick={() => changeIndex(+1)}
        className="ControlBtn"
      >
        Next
      </button>
    </section>
  );
};

export default Controls;
