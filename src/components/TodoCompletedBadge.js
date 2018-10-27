import React from 'react';
import { Badge } from 'reactstrap';

const TodoCompletedBadge = ({ completed }) => (
  <Badge color={completed ? 'success' : 'danger'}>
    {completed ? 'Completed' : 'Not Completed'}
  </Badge>
);

export default TodoCompletedBadge;
