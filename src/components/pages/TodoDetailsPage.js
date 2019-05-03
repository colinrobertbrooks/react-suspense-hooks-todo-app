import React, { useContext } from 'react';
import TodoContext from '../../contexts/TodoContext';
import TodoDetails from '../TodoDetails';

const TodoDetailsPage = ({ id }) => {
  const { getTodoById, deleteTodo } = useContext(TodoContext);
  const todo = getTodoById(id);

  return <TodoDetails id={id} todo={todo} deleteTodo={deleteTodo} />;
};
export default TodoDetailsPage;
