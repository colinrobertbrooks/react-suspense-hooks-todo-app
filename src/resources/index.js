import api from '../api';
import { wrapPromise } from './utils';

export default {
  todos: {
    list: wrapPromise(api.todos.list())
  }
};
