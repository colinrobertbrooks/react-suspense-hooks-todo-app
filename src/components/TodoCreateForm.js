import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const TodoCreateForm = ({
  initialText = '',
  initialCompleted = false,
  handleSubmit
}) => {
  const [text, setText] = useState(initialText);
  const [completed, setCompleted] = useState(initialCompleted);

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit({ text, completed });
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
  );
};

export default TodoCreateForm;
