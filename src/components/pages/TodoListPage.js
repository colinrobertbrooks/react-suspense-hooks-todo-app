import React, { useContext } from 'react';
import { Row, Col } from 'reactstrap';
import TodoContext from '../../contexts/TodoContext';
import TodoCreateLink from '../TodoCreateLink';
import IsLoading from '../IsLoading';
import HasError from '../HasError';
import TodoList from '../TodoList';

const TodoListPage = () => {
  const { isLoading, error, todos } = useContext(TodoContext);

  return (
    <Row className="text-center">
      <Col xs={12}>
        <h2>Todos</h2>
        <TodoCreateLink />
        <hr />
      </Col>
      <Col xs={12}>
        {(() => {
          if (isLoading) {
            return <IsLoading message="Loading todos..." />;
          }

          if (error) {
            return (
              <HasError message={`Error loading todos: ${error.message}`} />
            );
          }

          return <TodoList todos={todos} />;
        })()}
      </Col>
    </Row>
  );
};

export default TodoListPage;
