import { Component } from 'react';

import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList/TodoList';

import initialTodos from '../data/todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodos = todos.length;
    // const completedTodos = todos.filter(todo => todo.completed);
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <div className="container">
        <Counter initialValue={0} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />

        <div
          style={{
            marginTop: 50,
            backgroundColor: 'white',
            width: 600,
            padding: 20,
            borderRadius: 8,
          }}
        >
          <p>Total todos: {totalTodos} </p>
          {/* <p>Complited todos: {completedTodos.length}</p> */}
          <p>Complited todos: {completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <div className="container">
//       <Counter initialValue={0} />

//       <Dropdown />

//       <ColorPicker options={colorPickerOptions} />

//       {/* <TodoList /> */}
//     </div>
//   );
// };
