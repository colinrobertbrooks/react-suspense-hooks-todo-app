import { v4 } from 'uuid';
import { USE_LOCAL_STORAGE_FOR_TODOS } from '../config';
import { getTodosFromLocalStorage, setTodosToLocalStorage } from './utils';

const defaultTodosData = [
  {
    id: v4(),
    text: 'Try Suspense',
    completed: true,
    createdAt: 1541163993401,
    createdBy: 'colinrcummings',
    updatedAt: 1541163996938,
    updatedBy: 'colinrcummings',
  },
  {
    id: v4(),
    text: 'Try Hooks',
    completed: true,
    createdAt: 1541163995178,
    createdBy: 'colinrcummings',
    updatedAt: 1541163996938,
    updatedBy: 'colinrcummings',
  },
  {
    id: v4(),
    text: 'Profit',
    completed: false,
    createdAt: 1541163996071,
    createdBy: 'colinrcummings',
    updatedAt: 1541163996071,
    updatedBy: 'colinrcummings',
  },
];

let todosData = (() => {
  if (USE_LOCAL_STORAGE_FOR_TODOS) {
    const todosFromLocalStorage = getTodosFromLocalStorage();

    if (todosFromLocalStorage) {
      return todosFromLocalStorage;
    }

    setTodosToLocalStorage(defaultTodosData);
    return defaultTodosData;
  }

  return defaultTodosData;
})();

export const getTodosData = () => todosData;

export const setTodosData = (nextTodosData) => {
  todosData = nextTodosData;
  if (USE_LOCAL_STORAGE_FOR_TODOS) setTodosToLocalStorage(nextTodosData);
};
