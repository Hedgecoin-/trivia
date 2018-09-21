import React, { Component } from 'react';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'mdbreact';

import QuestionBody from './QuestionBody';
import PlayerStore from '../Player/PlayerStore.js';

class Question extends Component {
  state = {
    modal: false,
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  completeRound = () => {
    PlayerStore.completeRound();
    this.setState({ modal: false });
  }

  render(){
    const { modal } = this.state;
    const { front, back, categoryName } = this.props;

    return (
      <Container>
        <Button onClick={this.toggle}>{front}</Button>
        <Modal isOpen={modal} toggle={this.toggle} size="fluid">
          <ModalHeader toggle={this.toggle}>{categoryName}</ModalHeader>
          <ModalBody>
            <QuestionBody text={back.text} answer={back.answer} />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="primary" onClick={this.completeRound}>Save Score</Button>
          </ModalFooter>
        </Modal>
      </Container>
    )
  }
}

export default Question;
