import React from 'react'
import { useState } from 'react';
//import {Button, Modal} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { alignPropType } from 'react-bootstrap/esm/types';


function Formulario() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function save(){
    let title = document.querySelector('#titulo').value;
    let description = document.querySelector('#desc').value;

    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
         "title": title,
         "description" : description
     });
     
     fetch("http://localhost:8080/api/tutorials", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     })
      .then(function(data) {
       console.log(data);
        setShow(false);
     })

  }

  return (
    <>
      <button className='publicados' onClick={handleShow}>AÑADIR</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Añadir</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="titulo">Título</label>
              <input type="text" className="form-control" id="titulo" aria-describedby="emailHelp" placeholder="Título" />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Descripción</label>
              <input type="text" className="form-control" id="desc" placeholder="Descripción" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={save}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Formulario;