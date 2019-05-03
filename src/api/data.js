/* eslint-disable import/prefer-default-export */
import { v4 } from 'node-uuid';

export const initialTodos = [
  {
    id: v4(),
    text: 'Try Suspense',
    completed: true,
    createdAt: 1541163993401,
    createdBy: 'colinrcummings',
    updatedAt: 1541163996938,
    updatedBy: 'colinrcummings'
  },
  {
    id: v4(),
    text: 'Try Hooks',
    completed: true,
    createdAt: 1541163995178,
    createdBy: 'colinrcummings',
    updatedAt: 1541163996938,
    updatedBy: 'colinrcummings'
  },
  {
    id: v4(),
    text: 'Profit',
    completed: false,
    createdAt: 1541163996071,
    createdBy: 'colinrcummings',
    updatedAt: 1541163996071,
    updatedBy: 'colinrcummings'
  }
];
