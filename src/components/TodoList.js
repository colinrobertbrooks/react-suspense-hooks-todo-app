import React from 'react';
import { unstable_createResource as createResource } from 'react-cache';
import { Row, Col } from 'reactstrap';

import api from '../api';
import useDocumentTitle from '../hooks/useDocumentTitle';
import TodoListGroup from './TodoListGroup';

const TodoListResource = createResource(api.todos.list);

const TodoList = () => {
  useDocumentTitle('Todos');

  return (
    <Row>
      <Col xs={12}>
        <TodoListGroup todos={TodoListResource.read()} />
      </Col>
    </Row>
  );
};
export default TodoList;
