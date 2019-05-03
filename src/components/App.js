import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import { Container } from 'reactstrap';

import IsLoading from './IsLoading';

const TodoListPage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoListPage' */ './pages/TodoListPage')
);
const TodoDetailsPage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoDetailsPage' */ './pages/TodoDetailsPage')
);
const TodoCreatePage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoCreatePage' */ './pages/TodoCreatePage')
);

function App() {
  return (
    <Suspense maxDuration={500} fallback={<IsLoading />}>
      <Container>
        <Router>
          <TodoListPage path={`${process.env.PUBLIC_URL}/`} />
          <TodoDetailsPage path={`${process.env.PUBLIC_URL}/details/:id`} />
          <TodoCreatePage path={`${process.env.PUBLIC_URL}/create`} />
        </Router>
      </Container>
    </Suspense>
  );
}

export default App;
