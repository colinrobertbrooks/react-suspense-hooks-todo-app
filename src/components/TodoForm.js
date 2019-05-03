import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { makeTo } from '../utils/router';

const TodoForm = ({
  id = null,
  initialText = '',
  initialCompleted = false,
  onSubmit
}) => {
  const [text, setText] = useState(initialText);
  const [completed, setCompleted] = useState(initialCompleted);
  const [onSubmitError, setOnSubmitError] = useState(null);

  return (
    <div>
      {onSubmitError && <p className="text-danger">Error: {onSubmitError}</p>}
      <Form
        onSubmit={async event => {
          event.preventDefault();
          await onSubmit({ id, values: { text, completed } })
            .then(() => navigate(makeTo('/')))
            .catch(({ message }) => setOnSubmitError(message));
        }}
      >
        <FormGroup>
          <Label for="text">Text</Label>
          <Input
            type="text"
            id="test"
            name="text"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="completed">Completed</Label>
          <Input
            type="checkbox"
            id="completed"
            name="completed"
            checked={completed}
            onChange={event => setCompleted(event.target.checked)}
            style={{ position: 'static', display: 'block', marginLeft: 0 }}
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" color="primary">
            Submit
          </Button>{' '}
          <Link to={makeTo('/')}>
            <Button color="secondary" outline style={{ marginLeft: 5 }}>
              Cancel
            </Button>
          </Link>
        </FormGroup>
      </Form>
    </div>
  );
};

export default TodoForm;
