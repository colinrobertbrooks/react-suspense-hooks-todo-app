import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const TodoForm = ({
  id = null,
  initialText = '',
  initialCompleted = false,
  onSubmit,
}) => {
  const navigate = useNavigate();
  const [text, setText] = useState(initialText);
  const [completed, setCompleted] = useState(initialCompleted);
  const [onSubmitError, setOnSubmitError] = useState(null);
  const textInputRef = useRef(null);

  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  return (
    <div>
      {onSubmitError && <p className="text-danger">Error: {onSubmitError}</p>}
      <Form
        onSubmit={async (event) => {
          event.preventDefault();
          await onSubmit({ id, values: { text, completed } })
            .then(() => navigate('/'))
            .catch(({ message }) => setOnSubmitError(message));
        }}
      >
        <FormGroup>
          <Label for="text">Text</Label>
          <Input
            innerRef={textInputRef}
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="completed">Completed</Label>
          <Input
            type="checkbox"
            id="completed"
            name="completed"
            checked={completed}
            onChange={(event) => setCompleted(event.target.checked)}
            style={{ position: 'static', display: 'block', marginLeft: 0 }}
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" color="primary">
            Submit
          </Button>{' '}
          <Link to="/">
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
