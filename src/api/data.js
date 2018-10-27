/* eslint-disable import/prefer-default-export */
import { v4 } from 'node-uuid';

/*
  new Date().getTime()
*/

export const todos = [
  {
    id: v4(),
    text: 'Try Suspense',
    completed: true,
    createdAt: 1541163993401,
    createdBy: 'colin',
    updatedAt: 1541163996938,
    updatedBy: 'colin'
  },
  {
    id: v4(),
    text: 'Try Hooks',
    completed: true,
    createdAt: 1541163995178,
    createdBy: 'colin',
    updatedAt: 1541163996938,
    updatedBy: 'colin'
  },
  {
    id: v4(),
    text: 'Profit',
    completed: false,
    createdAt: 1541163996071,
    createdBy: 'colin',
    updatedAt: 1541163996071,
    updatedBy: 'colin'
  }
];
