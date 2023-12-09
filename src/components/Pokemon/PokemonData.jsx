import styles from 'components/Pokemon/Pokemon.module.css';

function PokemonData({ pokemon: { sprites, name, stats } }) {
  return (
    <div className={styles.data}>
      <h2 className={styles.title}>{name}</h2>
      <img
        src={sprites.other['official-artwork'].front_default}
        alt=""
        width="300"
      />
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name} : {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonData;
