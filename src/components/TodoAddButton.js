import React from 'react';
import { Button } from 'reactstrap';

const TodoAddButton = () => (
  <Button outline color="secondary" size="sm" onClick={() => alert('TODO')}>
    Add Todo
  </Button>
);

export default TodoAddButton;
