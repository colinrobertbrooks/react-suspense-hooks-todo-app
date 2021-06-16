import React, { useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import TodoContext from '../../contexts/TodoContext';
import IsLoading from '../IsLoading';
import TodoNotFound from '../TodoNotFound';
import TodoCompletedBadge from '../TodoCompletedBadge';
import TodoDetailsTable from '../TodoDetailsTable';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const TodoDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, getTodoById, deleteTodo } = useContext(TodoContext);
  const todo = getTodoById(id);
  useDocumentTitle(todo ? `Details for "${todo.text}"` : 'Todo Not Found');

  const handleDelete = async () => {
    await deleteTodo(id)
      .then(() => navigate('/'))
      .catch(({ message }) => alert(`Error deleting todo: ${message}`));
  };

  if (!isLoading && !todo) return <TodoNotFound id={id} />;

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
        <Link to={`/update/${id}`}>Update</Link>
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
        <Link to="/">All Todos</Link>
      </Col>
    </Row>
  );
};

export default TodoDetailsPage;
