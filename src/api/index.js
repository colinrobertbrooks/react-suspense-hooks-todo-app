import { v4 } from 'node-uuid';
import {
  getTodosFromLocalStorage,
  setTodosToLocalStorage,
  delay
} from './utils';
import { initialTodos, getTimestamp } from './data';

const RANDOM_ERRORS = false;

const api = {
  todos: {
    async list() {
      console.log('📞 `api.todos.list` called:');
      if (RANDOM_ERRORS && Math.random() > 0.5) {
        throw new Error('💣');
      }
      const todosFromLocalStorage = getTodosFromLocalStorage();
      if (todosFromLocalStorage) {
        return todosFromLocalStorage;
      }

      await delay();
      setTodosToLocalStorage(initialTodos);
      return initialTodos;
    },
    async create(todo) {
      console.log(`📞 api.todos.create called:`);
      await delay();
      if (RANDOM_ERRORS && Math.random() > 0.5) {
        throw new Error('💣');
      }
      const timestamp = getTimestamp();
      const user = 'user'; // TODO
      const newTodo = {
        ...todo,
        id: v4(),
        createdAt: timestamp,
        createdBy: user,
        updatedAt: timestamp,
        updatedBy: user
      };
      const existingTodos = getTodosFromLocalStorage();
      setTodosToLocalStorage([...existingTodos, newTodo]);
    }
  }
};

export default api;
