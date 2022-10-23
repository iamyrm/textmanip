import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const [data, setData] = useState("")

  const eventHandler = (event) => {
    setData(event.target.value)
  }


  return (
    <>
      <div className="container">
        <Form>
        <textarea className="form-control my-4" value={data} onChange={eventHandler} placeholder="Enter your message here." rows="8"></textarea>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </div>
    </>

  );
}

export default BasicExample;