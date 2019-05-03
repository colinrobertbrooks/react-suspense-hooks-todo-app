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

  const fetchTodoList = async () => {
    try {
      const todos = await api.todos.list();
      dispatch({ type: FETCH_TODO_LIST_SUCCESS, payload: { todos } });
    } catch (error) {
      dispatch({ type: FETCH_TODO_LIST_ERROR, payload: { error } });
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const getTodoById = id => {
    const { todos } = store;

    if (todos) {
      return todos.find(todo => todo.id === id);
    }

    return null;
  };

  const createTodo = async todo => {
    try {
      await api.todos.create(todo);
    } catch (error) {
      throw error;
    }

    await fetchTodoList();
  };

  return (
    <TodoContext.Provider value={{ ...store, getTodoById, createTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

const TodoConsumer = TodoContext.Consumer;

export default TodoContext;

export { TodoProvider, TodoConsumer };
