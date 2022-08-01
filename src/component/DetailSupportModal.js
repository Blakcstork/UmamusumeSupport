import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DetailSupportModal({open, setPopup, message, title, callback, info}) {
    const handleClose = () => {
      setPopup({open: false});
      if(callback){
        callback();
      }
    }

    return (
      <>
        <Modal show={open} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {message}
            <div>
              
            </div>
            
            </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default DetailSupportModal;