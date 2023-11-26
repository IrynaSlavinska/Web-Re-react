import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import IconButton from '../IconButton/IconButton';

const TodoItem = ({ text, completed, onToggleCompleted, onDeleteTodo }) => {
  return (
    <>
      <input
        type="checkbox"
        name="license"
        className="TodoListCheckBox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="Todo-text">{text}</p>
      <IconButton className="Todo-deleteBtn" onClick={onDeleteTodo}>
        <DeleteIcon width="20" height="20" fill="white" />
      </IconButton>

      {/* <button type="button" className="Todo-deleteBtn" onClick={onDeleteTodo}>
        Delete
      </button> */}
    </>
  );
};

export default TodoItem;
