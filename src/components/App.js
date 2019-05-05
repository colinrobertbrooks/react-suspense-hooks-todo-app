import React, { Suspense, useContext } from 'react';
import { Router } from '@reach/router';
import { Container } from 'reactstrap';
import UserContext from '../contexts/UserContext';
import IsLoading from './IsLoading';
import Footer from './Footer';
import UserModal from './UserModal';
import { makeTo } from '../utils/router';

const TodoListPage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoListPage' */ './pages/TodoListPage')
);
const TodoDetailsPage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoDetailsPage' */ './pages/TodoDetailsPage')
);
const TodoCreatePage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoCreatePage' */ './pages/TodoCreatePage')
);
const TodoUpdatePage = React.lazy(() =>
  import(/* webpackChunkName: 'TodoUpdatePage' */ './pages/TodoUpdatePage')
);

const App = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Suspense maxDuration={500} fallback={<IsLoading />}>
      <Container>
        <Router>
          <TodoListPage path={makeTo('/')} />
          <TodoDetailsPage path={makeTo('/details/:id')} />
          <TodoCreatePage path={makeTo('/create')} />
          <TodoUpdatePage path={makeTo('/update/:id')} />
        </Router>
      </Container>
      <Footer user={user} />
      {!user && <UserModal onSubmit={setUser} />}
    </Suspense>
  );
};

export default App;
