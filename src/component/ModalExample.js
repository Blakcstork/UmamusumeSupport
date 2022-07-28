import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import DetailRaceInfo from './DetailRaceInfo';

function ModalExample({open, setPopup, message, title, callback, info}) {
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
            <DetailRaceInfo 
              name = {info[0]}
              month = {info[1]}
              day = {info[2]}
              period = {info[3]} 
              distance = {info[4]} 
              type = {info[5]}
              grade = {info[6]} 
              place = {info[7]}
              curve = {info[8]} 
              require = {info[9]} 
              fan = {info[10]} 
              gate = {info[11]} 
              img = {info[12]}
            />
            
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