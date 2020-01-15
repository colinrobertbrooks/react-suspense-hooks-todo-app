/* eslint-disable import/prefer-default-export */
import api from '../api';
import { wrapPromise } from './utils';

export const createTodosResource = () => ({
  list: wrapPromise(api.todos.list())
});
