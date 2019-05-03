import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { ListGroupItem } from 'reactstrap';
import TodoContext from '../contexts/TodoContext';
import TodoCompletedBadge from './TodoCompletedBadge';

const TodoListGroupItem = ({ id, text, completed }) => {
  const { deleteTodo } = useContext(TodoContext);

  const handleDelete = async () => {
    await deleteTodo(id).catch(({ message }) => {
      alert(`Error deleting todo: ${message}`);
    });
  };

  return (
    <ListGroupItem className="text-center">
      <h4>
        {text} <TodoCompletedBadge completed={completed} />
      </h4>
      <Link to={`${process.env.PUBLIC_URL}/details/${id}`}>Details</Link>
      <span className="text-muted"> | </span>
      <button type="button" className="look-like-a-link" onClick={handleDelete}>
        Delete
      </button>
    </ListGroupItem>
  );
};
export default TodoListGroupItem;
