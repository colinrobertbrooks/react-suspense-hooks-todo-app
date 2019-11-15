/* eslint-disable no-console */
import {
  MIN_RANDOM_API_DELAY_MIN_MS,
  RANDOM_API_DELAY_MAX_MS,
  FIXED_API_DELAY_MS,
  THROW_API_ERRORS
} from '../config';
import { getLocalStorageValue, setLocalStorage } from '../utils/localStorage';

/*
  local storage
*/
const USER_LOCAL_STORAGE_KEY = 'USER';
const TODOS_LOCAL_STORAGE_KEY = 'TODOS';

export const getUserFromLocalStorage = () => {
  const user = getLocalStorageValue(USER_LOCAL_STORAGE_KEY);

  if (user) {
    console.log('👤 `user` read from local storage');
    return user;
  }

  return null;
};

export const setUserToLocalStorage = user => {
  console.log('👤 `user` written to local storage');
  setLocalStorage(USER_LOCAL_STORAGE_KEY, user);
};

export const getTodosFromLocalStorage = () => {
  const todos = getLocalStorageValue(TODOS_LOCAL_STORAGE_KEY);

  if (todos) {
    console.log('🗒 `todos` read from local storage');
    return JSON.parse(todos);
  }

  return null;
};

export const setTodosToLocalStorage = todos => {
  console.log('🗒 `todos` written to local storage');
  setLocalStorage(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

/*
  delay
*/
const getRandomMs = ({
  min = MIN_RANDOM_API_DELAY_MIN_MS,
  max = RANDOM_API_DELAY_MAX_MS
} = {}) => Math.floor(Math.random() * (max - min + 1) + min);

export const apiDelayPerConfig = (ms = FIXED_API_DELAY_MS || getRandomMs()) => {
  console.log(`     - ⏲️ delay was ${ms} ms`);
  return new Promise(resolve => setTimeout(resolve, ms));
};

/*
  errors
*/
const getRandomErrorEmoji = () => {
  const errors = ['😢', '👹', '💩', '💣', '💀'];
  return errors[Math.floor(Math.random() * errors.length)];
};

const throwRandomError = () => {
  if (Math.random() > 0.5) {
    throw new Error(getRandomErrorEmoji());
  }
};

export const apiErrorPerConfig = () => {
  switch (THROW_API_ERRORS) {
    case 'ALWAYS':
      throw new Error(getRandomErrorEmoji());
    case 'RANDOM':
      return throwRandomError();
    case 'NEVER':
    default:
      return undefined;
  }
};
