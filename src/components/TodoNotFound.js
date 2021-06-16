import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

const TodoNotFound = ({ id }) => (
  <Row className="text-center">
    <Col xs={12}>
      <h1>Todo Not Found</h1>
      <hr />
    </Col>
    <Col xs={12}>
      <p className=" text-danger">
        A todo does not exist with id &#34;
        {id}
        &#34;.
      </p>
    </Col>
    <Col xs={12}>
      <Link to="/">All Todos</Link>
    </Col>
  </Row>
);

export default TodoNotFound;
