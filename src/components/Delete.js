import React from 'react'
import { useState } from 'react';
//import {Button, Modal} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Delete from '../basura.svg'


function Formulario(props) {
    const item = props.item;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    function save(){
        
        let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
        }
            
        fetch("http://localhost:8080/api/tutorials/"+item.id, { 
        method: "DELETE",
        headers: headersList
        })
        .then(function(data) {
        console.log(data);
        setShow(false);
        })
    }

  return (
    <>
      <Button variant="light" onClick={handleShow}> <img  src={Delete} alt="editar" width="16"></img></Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Está seguro que desea eliminar el registro?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={save}>Eliminar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Formulario;