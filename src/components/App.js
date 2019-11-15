import { Router } from '@reach/router';
import React, { Suspense, useContext } from 'react';
import { Container } from 'reactstrap';
import UserContext from '../contexts/UserContext';
import { makeTo } from '../utils/router';
import Footer from './Footer';
import IsLoading from './IsLoading';
import UserModal from './UserModal';

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
  const { user, updateUser } = useContext(UserContext);

  return (
    <Suspense fallback={<IsLoading />}>
      <Container>
        <Router>
          <TodoListPage path={makeTo('/')} />
          <TodoDetailsPage path={makeTo('/details/:id')} />
          <TodoCreatePage path={makeTo('/create')} />
          <TodoUpdatePage path={makeTo('/update/:id')} />
        </Router>
      </Container>
      <Footer user={user} clearUser={() => updateUser(null)} />
      {!user && <UserModal updateUser={updateUser} />}
    </Suspense>
  );
};

export default App;
