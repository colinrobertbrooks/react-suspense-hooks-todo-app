import { getLocalStorageValue, setLocalStorage } from '../utils/localStorage';

const LOCAL_STORAGE_KEY = 'TODOS';

export const getTodosFromLocalStorage = () => {
  const todos = getLocalStorageValue(LOCAL_STORAGE_KEY);

  if (todos) {
    console.log('     - 📖 `todos` read from local storage');
    return JSON.parse(todos);
  }

  return null;
};

export const setTodosToLocalStorage = todos => {
  console.log('     - 🖊️ `todos` written to local storage');
  setLocalStorage(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

const randomMs = ({ min = 100, max = 1600 } = {}) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const delay = (ms = randomMs()) => {
  console.log(`     - ⏲️ delay was ${ms} ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
};
