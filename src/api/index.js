/* eslint-disable no-console */
import { v4 } from 'node-uuid';
import { getDate } from '../utils/date';
import { getTodosData, setTodosData } from './data';
import {
  getUserFromLocalStorage,
  apiDelayPerConfig,
  apiErrorPerConfig
} from './utils';

const listTodos = async () => {
  console.log('📞 `api.todos.list` called:');
  await apiDelayPerConfig();
  apiErrorPerConfig();

  return getTodosData();
};

const createTodo = async values => {
  console.log(`📞 api.todos.create called:`);
  await apiDelayPerConfig();
  apiErrorPerConfig();

  const date = getDate();
  const user = getUserFromLocalStorage();
  const newTodo = {
    ...values,
    id: v4(),
    createdAt: date,
    createdBy: user,
    updatedAt: date,
    updatedBy: user
  };

  setTodosData([...getTodosData(), newTodo]);
};

const updateTodo = async (id, values) => {
  console.log(`📞 api.todos.update called:`);
  await apiDelayPerConfig();
  apiErrorPerConfig();

  setTodosData(
    getTodosData().map(todo => {
      if (todo.id !== id) {
        return todo;
      }
      return {
        ...todo,
        ...values,
        updatedAt: getDate(),
        updatedBy: getUserFromLocalStorage()
      };
    })
  );
};

const deleteTodo = async id => {
  console.log(`📞 api.todos.delete called:`);
  await apiDelayPerConfig();
  apiErrorPerConfig();

  const idxToDelete = getTodosData().findIndex(todo => todo.id === id);

  setTodosData(getTodosData().filter((todo, idx) => idx !== idxToDelete));
};

const api = {
  todos: {
    list: listTodos,
    create: createTodo,
    update: updateTodo,
    delete: deleteTodo
  }
};

export default api;
