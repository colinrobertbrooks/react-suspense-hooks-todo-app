import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { ListGroupItem } from 'reactstrap';
import TodoContext from '../contexts/TodoContext';
import TodoCompletedBadge from './TodoCompletedBadge';
import { makeTo } from '../utils/router';

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
      <Link to={makeTo(`/details/${id}`)}>Details</Link>
      <span className="text-muted"> | </span>
      <Link to={makeTo(`/update/${id}`)}>Update</Link>
      <span className="text-muted"> | </span>
      <button type="button" className="look-like-a-link" onClick={handleDelete}>
        Delete
      </button>
    </ListGroupItem>
  );
};
export default TodoListGroupItem;
