import { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <LoginForm />
      </div>
    );
  }
}

export default App;
