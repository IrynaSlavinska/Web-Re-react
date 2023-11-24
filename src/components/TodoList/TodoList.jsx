import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="Todo-list">
      {todos.map(({ id, text }) => {
        return (
          <li key={id} className="Todo-item">
            <p className="Todo-text">{text}</p>
            <button
              type="button"
              className="Todo-deleteBtn"
              onClick={() => onDeleteTodo(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
