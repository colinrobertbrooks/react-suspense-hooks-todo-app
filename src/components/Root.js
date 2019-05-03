import React, { StrictMode } from 'react';
import { TodoProvider } from '../contexts/TodoContext';
import App from './App';
// import UnsafeExample from './UnsafeExample';

function Root() {
  return (
    <StrictMode>
      <TodoProvider>
        <App />
      </TodoProvider>
    </StrictMode>
  );
}

export default Root;
