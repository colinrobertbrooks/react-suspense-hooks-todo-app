import React from 'react';
import { Link } from '@reach/router';
import { Row, Col } from 'reactstrap';
import { makeTo } from '../utils/router';

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
      <Link to={makeTo('/')}>All Todos</Link>
    </Col>
  </Row>
);

export default TodoNotFound;
