import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="Todo-list">
      {todos.map(({ id, text, completed }) => {
        return (
          <li key={id} className="Todo-item">
            <TodoItem
              text={text}
              completed={completed}
              onToggleCompleted={() => onToggleCompleted(id)}
              onDeleteTodo={() => onDeleteTodo(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
