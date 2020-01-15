import React, { StrictMode } from 'react';
import { TodoProvider } from '../contexts/TodoContext';
import { UserProvider } from '../contexts/UserContext';
import App from './App';
// import UnsafeExample from './UnsafeExample';

const Root = () => (
  <StrictMode>
    <UserProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </UserProvider>
  </StrictMode>
);

export default Root;
