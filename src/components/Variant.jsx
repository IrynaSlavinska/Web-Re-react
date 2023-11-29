import { Component } from 'react';

class PokemonInfo extends Component {
  state = {
    pokemon: null,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { pokemonName } = this.props;

    if (prevProps.pokemonName !== pokemonName) {
      this.setState({ isLoading: true, pokemon: null });

      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        // .then(resp => resp.json())
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`No ${pokemonName} pokemon`));
        })
        .then(pokemon => this.setState({ pokemon }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  render() {
    const { pokemon, isLoading, error } = this.state;
    const { pokemonName } = this.props;

    return (
      <div>
        {error && <h2>{error.message}</h2>}
        {isLoading && <p>Loading...</p>}
        {!pokemonName && <p>Enter pokemon name</p>}
        {pokemon && (
          <div>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt=""
              width="300"
            />
          </div>
        )}
      </div>
    );
  }
}

export default PokemonInfo;
