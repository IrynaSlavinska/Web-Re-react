import { Component } from 'react';
import { CiSearch } from 'react-icons/ci';

import './PokemonForm.css';

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      return alert('Enter pokemon name');
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <form className="PokemonForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemon"
          value={pokemonName}
          onChange={this.handleNameChange}
          className="PokemonFormInput"
        />
        <button type="submit" className="PokemonFormBtn">
          <CiSearch /> Search
        </button>
      </form>
    );
  }
}

export default PokemonForm;
