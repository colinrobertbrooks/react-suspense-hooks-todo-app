import React, { useState, useRef, useEffect } from 'react';
import ReactModal from 'react-modal';
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Button
} from 'reactstrap';

const UserModal = ({ updateUser }) => {
  const [hasOpened, setHasOpened] = useState(false);
  const [user, setUser] = useState('');
  const userInputRef = useRef(null);

  useEffect(
    () => {
      if (userInputRef.current) {
        userInputRef.current.focus();
      }
    },
    [hasOpened]
  );

  return (
    <ReactModal
      isOpen
      onAfterOpen={() => setHasOpened(true)}
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
          updateUser(user);
        }}
      >
        <ModalBody>
          <Input
            innerRef={userInputRef}
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
