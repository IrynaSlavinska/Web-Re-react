import PokemonForm from 'components/Pokemon/PokemonForm';
import PokemonInfo from 'components/Pokemon/PokemonInfo';
import styles from 'components/Pokemon/Pokemon.module.css';

import { useState } from 'react';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div className={styles.container}>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  );
}
