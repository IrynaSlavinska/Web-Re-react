import './Filter.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className="filterLabel">
      Filter
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="filterInput"
      />
    </label>
  );
};

export default Filter;
