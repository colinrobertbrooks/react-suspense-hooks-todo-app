import { v4 } from 'node-uuid';
import {
  getTodosFromLocalStorage,
  setTodosToLocalStorage,
  delay
} from './utils';
import { initialTodos } from './data';
import { getDate } from '../utils/date';

const LOAD_INITIAL_TODOS_FROM_LOCAL_STORAGE = true;
const THROW_RANDOM_ERRORS = false;

const throwRandomError = () => {
  const errors = ['😢', '👹', '💩', '💣', '💀'];
  if (Math.random() > 0.5) {
    const randomError = errors[Math.floor(Math.random() * errors.length)];
    throw new Error(randomError);
  }
};

const api = {
  todos: {
    async list() {
      console.log('📞 `api.todos.list` called:');
      if (THROW_RANDOM_ERRORS) throwRandomError();
      if (LOAD_INITIAL_TODOS_FROM_LOCAL_STORAGE) {
        const todosFromLocalStorage = getTodosFromLocalStorage();
        if (todosFromLocalStorage) {
          return todosFromLocalStorage;
        }
      }
      await delay();
      setTodosToLocalStorage(initialTodos);
      return initialTodos;
    },
    async create(values) {
      console.log(`📞 api.todos.create called:`);
      await delay(100);
      if (THROW_RANDOM_ERRORS) throwRandomError();
      const date = getDate();
      const user = 'user'; // TODO
      const newTodo = {
        ...values,
        id: v4(),
        createdAt: date,
        createdBy: user,
        updatedAt: date,
        updatedBy: user
      };
      const existingTodos = getTodosFromLocalStorage();
      setTodosToLocalStorage([...existingTodos, newTodo]);
    },
    async update(id, values) {
      console.log(`📞 api.todos.update called:`);
      await delay(100);
      if (THROW_RANDOM_ERRORS) throwRandomError();
      const existingTodos = getTodosFromLocalStorage();
      const updatedTodos = existingTodos.map(todo => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          ...values,
          updatedAt: getDate(),
          updatedBy: 'new user' // TODO
        };
      });
      setTodosToLocalStorage(updatedTodos);
    },
    async delete(id) {
      console.log(`📞 api.todos.delete called:`);
      await delay(100);
      if (THROW_RANDOM_ERRORS) throwRandomError();
      const existingTodos = getTodosFromLocalStorage();
      const idxToDelete = existingTodos.findIndex(todo => todo.id === id);
      setTodosToLocalStorage(
        existingTodos.filter((todo, idx) => idx !== idxToDelete)
      );
    }
  }
};

export default api;
