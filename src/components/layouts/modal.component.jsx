import React, { Component } from 'react';


import Modal from 'react-bootstrap/Modal';

class ModalComponent extends React.Component {

    constructor(props) {
        super(props)
        console.log("props");
        
    }

    handleClose= () => {
        console.log("closing the modal")
    }

    render() {

        return (

            <div>
                <p>dadahdjdahhdhda</p>
                <Modal show={this.props.show} onHide={this.handleClose}  animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
             
        )
    }
}

export default ModalComponent;