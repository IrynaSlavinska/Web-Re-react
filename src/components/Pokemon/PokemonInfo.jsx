import { useState, useEffect } from 'react';

import PokemonError from 'components/Pokemon/PokemonError';
import PokemonData from 'components/Pokemon/PokemonData';
import PokemonPending from 'components/Pokemon/PokemonPending';
import pokemonAPI from 'services/pokemon-api';

function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus('pending');

    pokemonAPI(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });

    //
  }, [pokemonName]);

  if (status === 'idle') {
    return <p>Enter pokemon name</p>;
  }

  if (status === 'pending') {
    return <PokemonPending />;
  }

  if (status === 'rejected') {
    return <PokemonError message={error.message} />;
  }

  if (status === 'resolved') {
    return <PokemonData pokemon={pokemon} />;
  }
}

export default PokemonInfo;
