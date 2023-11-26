// import { Component } from 'react';

// import Modal from './Modal/Modal';
// import Clock from './Clock/Clock';
// import Tabs from './Tabs/Tabs';

// import { ReactComponent as DeleteIcon } from './icons/delete.svg';
// import { ReactComponent as AddIcon } from './icons/add.svg';

// import tabs from '../data/tabs.json';

// class App extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { showModal } = this.state;
//     return (
//       <div className="container">
//         {showModal && <Clock />}

//         <button type="button" onClick={this.toggleModal} className="ModalBtn">
//           Open
//         </button>

//         <Clock />

//         <Tabs items={tabs} />

//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <h1>Modal Content</h1>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
//               suscipit enim provident explicabo id aut consectetur amet sapiente
//               totam tenetur! Illum, est? Laboriosam facere ipsum aspernatur
//               aliquid, totam necessitatibus hic esse? Tempore id odio maxime
//               magni ut recusandae amet earum, est quo sint sed voluptatibus non
//               modi soluta, officia voluptatem!
//             </p>
//             <button
//               type="button"
//               onClick={this.toggleModal}
//               className="ModalBtn"
//             >
//               Close
//             </button>
//           </Modal>
//         )}

//         <DeleteIcon width="40" height="40" />
//         <AddIcon width="40" height="40" />
//       </div>
//     );
//   }
// }

// export default App;

// ! * * * * * * * * * * * * * * * * * * * * * * * * ! //

import { Component } from 'react';
import shortid from 'shortid';

import TodoList from 'components/Todo/TodoList/TodoList';
import TodoEditor from 'components/Todo/TodoEditor/TodoEditor';
import Filter from 'components/Todo/Filter/Filter';

// import initialTodos from '../data/todos.json';

class App extends Component {
  state = {
    todos: [],
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

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      // кожний раз, коли відбуваються зміни в масиві тудушок
      // коли робиться новий масив - оновлюється стейт, викликається componentDidUpdate,
      // порівнюються prevState.todos !== this.state.todos
      // якщо оновився - то повністю перезаписується локал сторедж

      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

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
