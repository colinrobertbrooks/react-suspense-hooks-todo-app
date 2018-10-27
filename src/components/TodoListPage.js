import React, { Suspense } from 'react';
import { Row, Col } from 'reactstrap';

import Loading from './Loading';
import TodoList from './TodoList';

const TodoListPage = () => (
  <Row className="text-center">
    <Col xs={12}>
      <h2>Todos</h2>
      <hr />
    </Col>
    <Col xs={12}>
      <Suspense
        maxDuration={1000}
        fallback={<Loading resourceName="todo list" />}
      >
        <TodoList />
      </Suspense>
    </Col>
  </Row>
);

export default TodoListPage;
