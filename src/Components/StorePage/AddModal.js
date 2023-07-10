import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddModal = (props) => {
  return (
    <AddModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <AddModal.Header closeButton>
        <AddModal.Title id="contained-modal-title-vcenter">
          Modal heading
        </AddModal.Title>
      </AddModal.Header>
      <AddModal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </AddModal.Body>
      <AddModal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </AddModal.Footer>
    </AddModal>
  );
};

export default AddModal;