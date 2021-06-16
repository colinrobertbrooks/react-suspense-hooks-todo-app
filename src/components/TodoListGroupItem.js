import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';
import TodoContext from '../contexts/TodoContext';
import TodoCompletedBadge from './TodoCompletedBadge';

const TodoListGroupItem = ({ id, text, completed }) => {
  const { deleteTodo } = useContext(TodoContext);

  const handleDelete = async () => {
    await deleteTodo(id).catch(({ message }) =>
      alert(`Error deleting todo: ${message}`)
    );
  };

  return (
    <ListGroupItem className="text-center">
      <h2>
        {text} <TodoCompletedBadge completed={completed} />
      </h2>
      <Link to={`/details/${id}`}>Details</Link>
      <span className="text-muted"> | </span>
      <Link to={`/update/${id}`}>Update</Link>
      <span className="text-muted"> | </span>
      <button type="button" className="look-like-a-link" onClick={handleDelete}>
        Delete
      </button>
    </ListGroupItem>
  );
};
export default TodoListGroupItem;
