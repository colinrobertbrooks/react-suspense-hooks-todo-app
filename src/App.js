import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import { Container } from 'reactstrap';

import Loading from './components/Loading';

const TodoListPage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoListPage' */ './components/TodoListPage')
);
const TodoDetailsPage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoDetailsPage' */ './components/TodoDetailsPage')
);

function App() {
  return (
    <Suspense maxDuration={500} fallback={<Loading />}>
      <Container>
        <Router>
          <TodoListPage path="/" />
          <TodoDetailsPage path="details/:id" />
        </Router>
      </Container>
    </Suspense>
  );
}

export default App;
