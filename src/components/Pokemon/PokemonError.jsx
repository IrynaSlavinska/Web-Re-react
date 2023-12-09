import ErrorImg from 'components/Pokemon/error.jpg';

function PokemonError({ message }) {
  return (
    <div role="alert">
      <img src={ErrorImg} width="350" alt="sadcat" />
      <p> {message} </p>
    </div>
  );
}
export default PokemonError;
