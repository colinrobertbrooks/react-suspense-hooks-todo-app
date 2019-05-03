import React from 'react';
import { Badge } from 'reactstrap';

const TodoCompletedBadge = ({ completed }) => (
  <small style={{ display: 'block' }}>
    <Badge color={completed ? 'success' : 'danger'}>
      {completed ? 'Completed' : 'Not Completed'}
    </Badge>
  </small>
);

export default TodoCompletedBadge;
