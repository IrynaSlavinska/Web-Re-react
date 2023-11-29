import { Component } from 'react';

import PokemonError from '../PokemonError/PokemonError';
import PokemonData from '../PokemonData/PokemonData';
import PokemonPending from 'components/PokemonPending/PokemonPending';
import pokemonAPI from 'services/pokemon-api';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const { pokemonName } = this.props;

    if (prevProps.pokemonName !== pokemonName) {
      this.setState({ status: 'pending' });

      pokemonAPI(pokemonName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

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
}

export default PokemonInfo;
