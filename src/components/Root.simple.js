import { Router } from '@reach/router';
import React, { Component, Suspense, useState, createContext } from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { makeTo } from '../utils/router';
import { createTodosResource } from '../resources';
import IsLoading from './IsLoading';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <p className="text-center text-danger">Error: {error.message}.</p>;
    }

    return children;
  }
}

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

const TodoListPage = () => {
  const [todosResource, setTodosResource] = useState(() =>
    createTodosResource()
  );

  return (
    <Row>
      <Col xs={12} className="text-center">
        <h1>Todos</h1> <hr />
        <Suspense fallback={<IsLoading message="Loading todos..." />}>
          <ErrorBoundary>
            <TodoListGroup resource={todosResource.list} />
          </ErrorBoundary>
        </Suspense>
        <hr />
        <Button onClick={() => setTodosResource(createTodosResource)}>
          Update
        </Button>
      </Col>
    </Row>
  );
};

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
