import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ErrorAlert = ({ show, onHide, infoAlert }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        className={infoAlert.bgColor}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {infoAlert.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{infoAlert.body}</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
            repellendus dolor? Rem, eum. Asperiores, aspernatur.
          </p>
        </Modal.Body>
        <Modal.Footer className="d-grid">
          <Button variant="dark" size="lg" onClick={onHide}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ErrorAlert;
