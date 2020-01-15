import React, { Suspense } from 'react';
import resources from '../resources';

const Loader = () => <p>Loading...</p>;

const TodoList = ({ resource }) => {
  const todos = resource.read();

  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};

const Root = () => (
  <>
    <h1>Todos</h1>
    <Suspense fallback={<Loader />}>
      <TodoList resource={resources.todos.list} />
    </Suspense>
  </>
);

export default Root;
