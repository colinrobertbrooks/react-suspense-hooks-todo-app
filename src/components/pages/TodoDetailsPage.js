import React, { useContext } from 'react';
import { Link, navigate } from '@reach/router';
import { Row, Col } from 'reactstrap';
import TodoContext from '../../contexts/TodoContext';
import IsLoading from '../IsLoading';
import TodoNotFound from '../TodoNotFound';
import TodoCompletedBadge from '../TodoCompletedBadge';
import TodoDetailsTable from '../TodoDetailsTable';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { makeTo } from '../../utils/router';

const TodoDetailsPage = ({ id }) => {
  const { isLoading, getTodoById, deleteTodo } = useContext(TodoContext);
  const todo = getTodoById(id);
  useDocumentTitle(todo ? `Details for "${todo.text}" todo` : 'Todo Not Found');

  const handleDelete = async () => {
    await deleteTodo(id)
      .then(() => navigate(makeTo('/')))
      .catch(({ message }) => alert(`Error deleting todo: ${message}`));
  };

  if (!isLoading && !todo) {
    return <TodoNotFound id={id} />;
  }

  if (isLoading) {
    return (
      <Row>
        <Col xs={12}>
          <IsLoading />
        </Col>
      </Row>
    );
  }

  const { text, completed } = todo;

  return (
    <Row>
      <Col xs={12} className="text-center">
        <h1>
          {text} <TodoCompletedBadge completed={completed} />
        </h1>
        <Link to={makeTo(`/update/${id}`)}>Update</Link>
        <span className="text-muted"> | </span>
        <button
          type="button"
          className="look-like-a-link"
          onClick={handleDelete}
        >
          Delete
        </button>
        <hr />
      </Col>
      <Col xs={12} className="text-center">
        <TodoDetailsTable todo={todo} />
        <Link to={makeTo('/')}>All Todos</Link>
      </Col>
    </Row>
  );
};

export default TodoDetailsPage;
