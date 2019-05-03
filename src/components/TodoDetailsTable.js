import React from 'react';
import { Table } from 'reactstrap';
import { formatDate } from '../utils/date';

const TodoDetailsTable = ({ todo }) => {
  const { createdAt, createdBy, updatedAt, updatedBy } = todo;

  return (
    <Table bordered size="sm" className="text-center">
      <thead>
        <tr>
          <th>Action</th>
          <th>Date</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Create</td>
          <td>{formatDate(createdAt)}</td>
          <td>{createdBy}</td>
        </tr>
        <tr>
          <td>Update</td>
          <td>{formatDate(updatedAt)}</td>
          <td>{updatedBy}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TodoDetailsTable;
