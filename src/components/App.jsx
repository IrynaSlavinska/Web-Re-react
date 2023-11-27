import { Component } from 'react';

import Reader from './Reader/Reader';
import publications from '../data/publications.json';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Reader items={publications} />
      </div>
    );
  }
}

export default App;
