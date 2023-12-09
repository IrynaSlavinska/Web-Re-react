import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import styles from 'components/Pokemon/Pokemon.module.css';

function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = evt => {
    setPokemonName(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (pokemonName.trim() === '') {
      return alert('Enter pokemon name');
    }

    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="pokemon"
        value={pokemonName}
        onChange={handleNameChange}
        className={styles.input}
      />
      <button type="submit" className={styles.btn}>
        <CiSearch /> Search
      </button>
    </form>
  );
}

export default PokemonForm;
