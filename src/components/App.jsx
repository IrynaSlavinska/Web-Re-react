import { Component } from 'react';
import shortid from 'shortid';

import TodoList from './TodoList/TodoList';
import TodoEditor from './TodoEditor/TodoEditor';
import Filter from './Filter/Filter';

import initialTodos from '../data/todos.json';

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    // console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    //   this.setState(prevState => ({
    //     todos: prevState.todos.map(todo => {
    //       if (todo.id === todoId) {
    //         return {
    //           ...todo,
    //           completed: !todo.completed,
    //         };
    //       }

    //       return todo;
    //     }),
    //   }));
    // }; // мепаємо тудушки і порівнюємо айді. якщо айді співпадає -
    // розпиляємо старий об'єкт і повертаємо новий з попередніми властивостями
    // і інвертованим комлітід. Якщо не співпадає - то повертаємо стару тудушку

    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    // const completedTodos = todos.filter(todo => todo.completed);

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodos = todos.length;
    const completedTodosCount = this.calculateCompletedTodos();

    const visibleTodos = this.getVisibleTodos();

    return (
      <div className="container">
        <TodoEditor onSubmit={this.addTodo} />

        <Filter value={filter} onChange={this.changeFilter} />

        <div
          style={{
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

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;

// // * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// import { Component } from 'react';
// import Form from './Form/Form';

// class App extends Component {
//   state = {};

//   formSubmitHandler = data => {
//     console.log(data);
//   };

//   render() {
//     return (
//       <div className="container">
//         <Form onSubmit={this.formSubmitHandler} />
//       </div>
//     );
//   }
// }

// export default App;
