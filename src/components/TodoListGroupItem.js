import React from 'react';
import { Link } from '@reach/router';
import { ListGroupItem } from 'reactstrap';

import TodoCompletedBadge from './TodoCompletedBadge';

const TodoListGroupItem = ({ id, text, completed }) => (
  <ListGroupItem className="text-center">
    <h4>
      {text} <TodoCompletedBadge completed={completed} />
    </h4>
    <Link to={`details/${id}`}>Details</Link>
  </ListGroupItem>
);

export default TodoListGroupItem;
