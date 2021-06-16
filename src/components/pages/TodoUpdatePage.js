import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import TodoContext from '../../contexts/TodoContext';
import IsLoading from '../IsLoading';
import TodoNotFound from '../TodoNotFound';
import TodoForm from '../TodoForm';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const UpdateTodoPage = () => {
  const { id } = useParams();
  const { isLoading, getTodoById, updateTodo } = useContext(TodoContext);
  const todo = getTodoById(id);
  useDocumentTitle(todo ? `Update "${todo.text}"` : 'Todo Not Found');

  if (!isLoading && !todo) return <TodoNotFound id={id} />;

  return (
    <Row>
      <Col xs={12}>
        <h1 className="text-center">Update Todo</h1>
        <hr />
      </Col>
      <Col xs={12}>
        {(() => {
          if (isLoading) return <IsLoading />;

          const { text, completed } = todo;

          return (
            <TodoForm
              id={id}
              initialText={text}
              initialCompleted={completed}
              onSubmit={updateTodo}
            />
          );
        })()}
      </Col>
    </Row>
  );
};
export default UpdateTodoPage;
