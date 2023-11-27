const Progress = ({ index, TotalItems }) => {
  return (
    <p className="Progress">
      {index}/{TotalItems}
    </p>
  );
};

export default Progress;
