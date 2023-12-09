import Counter from './Counter/Counter';
import SkipFirstUseEffect from './SkipFirstUseEffect/SkipFirstUseEffect';
import CounterUseReducer from './CounterUseReducer/Counter';
import Friends from './Friends/Friends';

import PokemonView from 'views/PokemonView';

export const App = () => {
  return (
    <div className="container">
      <Counter />

      <SkipFirstUseEffect />

      <PokemonView />

      <CounterUseReducer />

      <Friends />
    </div>
  );
};
