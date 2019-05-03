import { v4 } from 'node-uuid';
import {
  getTodosFromLocalStorage,
  setTodosToLocalStorage,
  delay
} from './utils';
import { initialTodos, getTimestamp } from './data';

const api = {
  todos: {
    async list() {
      /*
      if (Math.random() > 0.5) {
        throw new Error('💣');
      }
      */
      const todosFromLocalStorage = getTodosFromLocalStorage();
      if (todosFromLocalStorage) {
        return todosFromLocalStorage;
      }

      console.log('📞 `api.todos.list` called:');
      await delay();
      setTodosToLocalStorage(initialTodos);
      return initialTodos;
    },
    async create(todo) {
      console.log(`📞 api.todos.create called:`);
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
      /*
      throw new Error('💣');
      */
      const existingTodos = getTodosFromLocalStorage();
      setTodosToLocalStorage([...existingTodos, newTodo]);
      await delay();
    }
  }
};

export default api;
