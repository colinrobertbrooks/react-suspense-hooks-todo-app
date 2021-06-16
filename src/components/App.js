import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // https://github.com/ReactTraining/react-router/issues/7870
import React, { Suspense, useContext } from 'react';
import { Container } from 'reactstrap';
import UserContext from '../contexts/UserContext';
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
          <Routes>
            <Route path="/" element={<TodoListPage />} />
            <Route path="/details/:id" element={<TodoDetailsPage />} />
            <Route path="/create" element={<TodoCreatePage />} />
            <Route path="/update/:id" element={<TodoUpdatePage />} />
          </Routes>
        </Router>
      </Container>
      <Footer user={user} clearUser={() => updateUser(null)} />
      {!user && <UserModal updateUser={updateUser} />}
    </Suspense>
  );
};

export default App;
