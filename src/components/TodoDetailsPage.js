import React, { useContext } from 'react';

import TodoContext from './TodoContext';
import TodoDetails from './TodoDetails';

const TodoDetailsPage = ({ id }) => {
  const { getTodoById } = useContext(TodoContext);
  const todo = getTodoById(id);

  return <TodoDetails todo={todo} id={id} />;
};
export default TodoDetailsPage;
