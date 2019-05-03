import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const TodoForm = ({ initialText = '', initialCompleted = false, onSubmit }) => {
  const [text, setText] = useState(initialText);
  const [completed, setCompleted] = useState(initialCompleted);
  const [onSubmitError, setOnSubmitError] = useState(null);

  return (
    <div>
      {onSubmitError && <p className="text-danger">Error: {onSubmitError}</p>}
      <Form
        onSubmit={async event => {
          event.preventDefault();
          await onSubmit({ text, completed })
            .then(() => {
              navigate(`${process.env.PUBLIC_URL}/`);
            })
            .catch(error => setOnSubmitError(error.message));
        }}
      >
        <FormGroup>
          <Label for="text">Text</Label>
          <Input
            type="text"
            id="test"
            name="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="completed">Completed</Label>
          <Input
            type="checkbox"
            id="completed"
            name="completed"
            checked={completed}
            onChange={e => setCompleted(e.target.checked)}
            style={{ position: 'static', display: 'block', marginLeft: 0 }}
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" outline color="success" size="sm">
            Submit
          </Button>{' '}
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <Button outline color="danger" size="sm">
              Cancel
            </Button>
          </Link>
        </FormGroup>
      </Form>
    </div>
  );
};

export default TodoForm;
