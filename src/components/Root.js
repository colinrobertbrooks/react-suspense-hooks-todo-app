import React, { StrictMode } from 'react';
import { UserProvider } from '../contexts/UserContext';
import { TodoProvider } from '../contexts/TodoContext';
import App from './App';
// import UnsafeExample from './UnsafeExample';

function Root() {
  return (
    <StrictMode>
      <UserProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </UserProvider>
    </StrictMode>
  );
}

export default Root;
