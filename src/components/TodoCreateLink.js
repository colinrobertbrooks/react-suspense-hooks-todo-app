import React from 'react';
import { Link } from '@reach/router';
import { makeTo } from '../utils/router';

const TodoCreateLink = () => <Link to={makeTo('/create')}>Create</Link>;

export default TodoCreateLink;
