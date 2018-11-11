import React from 'react';
import { Row, Col } from 'reactstrap';

import api from '../api';
import withLoading from './withLoading';
import TodoAddButton from './TodoAddButton';
import TodoList from './TodoList';

// TODO: move this
const TodoListContainer = withLoading(TodoList);

const TodoListPage = () => (
  <Row className="text-center">
    <Col xs={12}>
      <h2>Todos</h2>
      <TodoAddButton />
      <hr />
    </Col>
    <Col xs={12}>
      <TodoListContainer fetchData={api.todos.list} resourceName="todos" />
    </Col>
  </Row>
);

export default TodoListPage;
