import React from 'react';
import { Row, Col } from 'reactstrap';

import useDocumentTitle from '../hooks/useDocumentTitle';
import TodoListGroup from './TodoListGroup';

const TodoList = ({ data: todos }) => {
  useDocumentTitle('Todos');

  return (
    <Row>
      <Col xs={12}>
        <TodoListGroup todos={todos} />
      </Col>
    </Row>
  );
};
export default TodoList;
