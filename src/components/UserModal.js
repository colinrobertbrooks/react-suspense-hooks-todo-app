import React, { useState } from 'react';
import ReactModal from 'react-modal';
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Button
} from 'reactstrap';

const UserModal = ({ onSubmit }) => {
  const [user, setUser] = useState('');

  return (
    <ReactModal
      isOpen
      className="modal-content"
      overlayClassName="modal-dialog"
      portalClassName="modal fade show"
      bodyOpenClassName="modal-open"
      ariaHideApp={false}
    >
      <ModalHeader>User</ModalHeader>
      <Form
        onSubmit={event => {
          event.preventDefault();
          onSubmit(user);
        }}
      >
        <ModalBody>
          <Input
            aria-label="User"
            placeholder="enter username"
            type="text"
            value={user}
            onChange={event => setUser(event.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </ModalFooter>
      </Form>
    </ReactModal>
  );
};

export default UserModal;
