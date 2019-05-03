import React, { useReducer, useEffect } from 'react';

import api from '../api';

const initialState = {
  isLoading: true,
  error: null,
  todos: null
};

const FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS';
const FETCH_TODO_LIST_ERROR = 'FETCH_TODO_LIST_ERROR';

const TodoContext = React.createContext(null);

const TodoProvider = ({ children }) => {
  const [store, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case FETCH_TODO_LIST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: null,
          todos: action.payload.todos
        };

      case FETCH_TODO_LIST_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload.error,
          todos: null
        };

      default:
        return state;
    }
  }, initialState);

  const getTodos = async () => {
    try {
      const todos = await api.todos.list();
      dispatch({ type: FETCH_TODO_LIST_SUCCESS, payload: { todos } });
    } catch (error) {
      dispatch({ type: FETCH_TODO_LIST_ERROR, payload: { error } });
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const getTodoById = id => {
    const { todos } = store;

    if (todos) {
      return todos.find(todo => todo.id === id);
    }

    return null;
  };

  const createTodo = async ({ values }) => {
    try {
      await api.todos.create(values);
    } catch (error) {
      throw error;
    }

    await getTodos();
  };

  const updateTodo = async ({ id, values }) => {
    try {
      await api.todos.update(id, values);
    } catch (error) {
      throw error;
    }

    await getTodos();
  };

  const deleteTodo = async id => {
    try {
      await api.todos.delete(id);
    } catch (error) {
      throw error;
    }

    await getTodos();
  };

  return (
    <TodoContext.Provider
      value={{ ...store, getTodoById, createTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const TodoConsumer = TodoContext.Consumer;

export default TodoContext;

export { TodoProvider, TodoConsumer };
