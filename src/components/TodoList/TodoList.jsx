import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className="Todo-list">
      {todos.map(({ id, text, completed }) => {
        return (
          <li key={id} className="Todo-item">
            <input
              type="checkbox"
              name="license"
              className="TodoListCheckBox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
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
