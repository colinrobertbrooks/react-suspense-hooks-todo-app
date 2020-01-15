import { Router } from '@reach/router';
import React, { Suspense, createContext } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { makeTo } from '../utils/router';
import resources from '../resources';
import IsLoading from './IsLoading';

const TodoListGroup = ({ resource }) => {
  const todos = resource.read();

  return (
    <ListGroup>
      {todos.map(({ id, text }) => (
        <ListGroupItem key={id}>{text}</ListGroupItem>
      ))}
    </ListGroup>
  );
};

const TodoListPage = () => (
  <Row>
    <Col xs={12} className="text-center">
      <h1>Todos</h1> <hr />
      <Suspense fallback={<IsLoading message="Loading todos..." />}>
        <TodoListGroup resource={resources.todos.list} />
      </Suspense>
    </Col>
  </Row>
);

const App = () => (
  <Container>
    <Router>
      <TodoListPage path={makeTo('/')} />
    </Router>
  </Container>
);

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const value = {};

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const Root = () => (
  <TodoProvider>
    <App />
  </TodoProvider>
);

export default Root;
