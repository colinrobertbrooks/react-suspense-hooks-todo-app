import React from 'react';
import { ListGroup } from 'reactstrap';
import TodoListGroupItem from './TodoListGroupItem';

const TodoListGroup = ({ todos }) => (
  <ListGroup>
    {todos.map(todo => (
      <TodoListGroupItem key={todo.id} {...todo} />
    ))}
  </ListGroup>
);

export default TodoListGroup;
