import { delay } from './utils';
import { initialTodos } from './data';
import { getLocalStorageValue, setLocalStorage } from '../utils/localStorage';

const LOCAL_STORAGE_KEY = 'TODOS_DATA';

/*
  if(Math.random() > 0.5) {
    throw new Error('😢');
  }
*/

const api = {
  todos: {
    async list() {
      const localStorageTodos = getLocalStorageValue(LOCAL_STORAGE_KEY);

      if (localStorageTodos) {
        console.log('📚 `todos` loaded from local storage.');
        return JSON.parse(localStorageTodos);
      }

      console.log('📞 `api.todos.list` called:');
      await delay();

      console.log('📚 `todos` set to local storage.');
      setLocalStorage(LOCAL_STORAGE_KEY, JSON.stringify(initialTodos));

      return initialTodos;
    }
    /*
    async get(id) {
      console.log(`📞 api.todos.get called for id ${id}:`);

      await delay();

      return todos.find(todo => todo.id === id);
    }
    */
  }
};

export default api;
