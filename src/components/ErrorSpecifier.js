import Form from 'react-bootstrap/Form';

function ErrorSpecifier() {
  return (
    <>
      <Form.Label>Errors per record</Form.Label>
      <Form.Range />
    </>
  );
}

export default ErrorSpecifier;