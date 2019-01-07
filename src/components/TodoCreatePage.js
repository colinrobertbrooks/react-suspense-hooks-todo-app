import React from 'react';
import { Link } from '@reach/router';
import { Row, Col } from 'reactstrap';

const TodoCreatePage = () => (
  <Row className="text-center">
    <Col xs={12}>
      <h2>Create Todo</h2>
      <hr />
    </Col>
    <Col xs={12}>
      <p>...</p>
      <Link to={`${process.env.PUBLIC_URL}/`}>Cancel</Link>
    </Col>
  </Row>
);

export default TodoCreatePage;
