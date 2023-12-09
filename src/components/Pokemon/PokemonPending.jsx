import { ImSpinner } from 'react-icons/im';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

function PokemonPending() {
  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size={32} className="icon-spin" />
        Loading
      </div>
    </div>
  );
}

export default PokemonPending;
