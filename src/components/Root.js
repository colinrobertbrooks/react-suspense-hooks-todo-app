import React from 'react';

import { TodoProvider } from '../contexts/TodoContext';
import App from './App';

function Root() {
  return (
    <TodoProvider>
      <App />
    </TodoProvider>
  );
}

export default Root;
