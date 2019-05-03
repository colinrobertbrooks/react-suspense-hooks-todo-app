import React from 'react';
import { Link } from '@reach/router';

const TodoCreateLink = () => (
  <Link to={`${process.env.PUBLIC_URL}/create`}>Create</Link>
);

export default TodoCreateLink;
