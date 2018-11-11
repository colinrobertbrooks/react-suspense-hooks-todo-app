import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import { Container } from 'reactstrap';

import IsLoading from './components/IsLoading';

const TodoListPage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoListPage' */ './components/TodoListPage')
);
const TodoDetailsPage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoDetailsPage' */ './components/TodoDetailsPage')
);

function App() {
  return (
    <Suspense maxDuration={500} fallback={<IsLoading />}>
      <Container>
        <Router>
          <TodoListPage path={`${process.env.PUBLIC_URL}/`} />
          <TodoDetailsPage path={`${process.env.PUBLIC_URL}/details/:id`} />
        </Router>
      </Container>
    </Suspense>
  );
}

export default App;
