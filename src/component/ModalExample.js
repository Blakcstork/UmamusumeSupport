import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import DetailRaceInfo from './DetailRaceInfo';

function ModalExample({open, setPopup, message, title, callback, info}) {
    const newArray = info;
    const handleClose = () => {
      setPopup({open: false});
      console.log(newArray);
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
            <DetailRaceInfo />
            
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

export default ModalExample;