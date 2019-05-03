import React from 'react';
import { Row, Col } from 'reactstrap';
import TodoListGroup from './TodoListGroup';
import useDocumentTitle from '../hooks/useDocumentTitle';

const TodoList = ({ todos }) => {
  useDocumentTitle('Todos');

  return (
    <Row>
      <Col xs={12}>
        {todos.length ? <TodoListGroup todos={todos} /> : <p>No todos.</p>}
      </Col>
    </Row>
  );
};

export default TodoList;
