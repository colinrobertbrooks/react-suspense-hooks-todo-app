import React from 'react';
import { Link } from '@reach/router';
import { Row, Col, Table } from 'reactstrap';

import useDocumentTitle from '../hooks/useDocumentTitle';
import TodoCompletedBadge from './TodoCompletedBadge';

const formatDate = value => {
  const dt = new Date(value);

  return dt.toLocaleString();
};

const TodoDetails = ({ todo, id }) => {
  useDocumentTitle(todo ? `Details for "${todo.text}" todo` : 'Todo Not Found');

  if (!todo) {
    return (
      <Row className="text-center">
        <Col xs={12}>
          <h2>Todo Not Found</h2>
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
          <Link to={`${process.env.PUBLIC_URL}/`}>Todos</Link>
        </Col>
      </Row>
    );
  }

  const { text, completed, createdAt, createdBy, updatedAt, updatedBy } = todo;

  return (
    <Row className="text-center">
      <Col xs={12}>
        <h2>
          {text} <TodoCompletedBadge completed={completed} />
        </h2>
        <hr />
      </Col>
      <Col xs={12}>
        <Table bordered size="sm">
          <thead>
            <tr>
              <th>Action</th>
              <th>Date</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Create</td>
              <td>{formatDate(createdAt)}</td>
              <td>{createdBy}</td>
            </tr>
            <tr>
              <td>Update</td>
              <td>{formatDate(updatedAt)}</td>
              <td>{updatedBy}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col xs={12}>
        <Link to={`${process.env.PUBLIC_URL}/`}>Todos</Link>
      </Col>
    </Row>
  );
};

export default TodoDetails;