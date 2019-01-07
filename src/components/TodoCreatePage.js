import React from 'react';
import { Row, Col } from 'reactstrap';

import TodoCreateForm from './TodoCreateForm';

const TodoCreatePage = () => (
  <Row>
    <Col xs={12} className="text-center">
      <h2>Create Todo</h2>
      <hr />
    </Col>
    <Col xs={12}>
      <TodoCreateForm handleSubmit={data => console.log(data)} />
    </Col>
  </Row>
);

export default TodoCreatePage;
