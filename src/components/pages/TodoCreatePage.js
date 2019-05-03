import React, { useContext } from 'react';
import { Row, Col } from 'reactstrap';
import TodoContext from '../../contexts/TodoContext';
import TodoForm from '../TodoForm';

const TodoCreatePage = () => {
  const { createTodo } = useContext(TodoContext);

  return (
    <Row>
      <Col xs={12} className="text-center">
        <h2>Create Todo</h2>
        <hr />
      </Col>
      <Col xs={12}>
        <TodoForm onSubmit={createTodo} />
      </Col>
    </Row>
  );
};
export default TodoCreatePage;
