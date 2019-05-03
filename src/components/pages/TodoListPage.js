import React, { useContext } from 'react';
import { Link } from '@reach/router';
import { Row, Col } from 'reactstrap';
import TodoContext from '../../contexts/TodoContext';
import IsLoading from '../IsLoading';
import HasError from '../HasError';
import TodoListGroup from '../TodoListGroup';
import useDocumentTitle from '../../hooks/useDocumentTitle';

import { makeTo } from '../../utils/router';

const TodoListPage = () => {
  useDocumentTitle('All Todos');
  const { isLoading, error, todos } = useContext(TodoContext);

  return (
    <Row>
      <Col xs={12} className="text-center">
        <h1>All Todos</h1>
        <Link to={makeTo('/create')}>Create</Link>
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

          return todos.length ? (
            <TodoListGroup todos={todos} />
          ) : (
            <p className="text-center">No todos.</p>
          );
        })()}
      </Col>
    </Row>
  );
};

export default TodoListPage;
