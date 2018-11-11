import React from 'react';

import api from '../api';
import withLoading from './withLoading';
import TodoDetails from './TodoDetails';

// TODO: move this
const TodoDetailsContainer = withLoading(TodoDetails);

const TodoDetailsPage = ({ id }) => (
  <TodoDetailsContainer
    fetchData={() => api.todos.get(id)}
    resourceName="todo"
    id={id}
  />
);

export default TodoDetailsPage;
