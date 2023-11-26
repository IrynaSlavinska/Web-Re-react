import { Component } from 'react';
import './TodoEditor.css';

class TodoEditor extends Component {
  state = { message: '' };

  enterNewTodo = event => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="AddForm">
        <textarea
          value={this.state.message}
          onChange={this.enterNewTodo}
          className="AddText"
        ></textarea>
        <button type="submit" className="AddBtn">
          Create
        </button>
      </form>
    );
  }
}

export default TodoEditor;
