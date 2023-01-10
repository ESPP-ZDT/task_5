import Form from 'react-bootstrap/Form';

function DefineSeedInput() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Define random seed</Form.Label>
        <Form.Control as="textarea"/>
      </Form.Group>
    </Form>
  );
}

export default DefineSeedInput;