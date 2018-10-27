import React, { Suspense } from 'react';

import Loading from './Loading';
import TodoDetails from './TodoDetails';

const TodoDetailsPage = ({ id }) => (
  <Suspense
    maxDuration={1000}
    fallback={<Loading resourceName="todo details" />}
  >
    <TodoDetails id={id} />
  </Suspense>
);

export default TodoDetailsPage;
