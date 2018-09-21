import React, { Component } from 'react';
import { Card, CardBody, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'mdbreact';

import QuestionBody from './QuestionBody';
import PlayerStore from '../Player/PlayerStore.js';

class Question extends Component {
  state = {
    modal: false,
    answered: false,
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  completeRound = () => {
    PlayerStore.completeRound();
    this.setState({ modal: false, answered: true });
  }

  render(){
    const { modal, answered } = this.state;
    const { front, back, categoryName } = this.props;

    let questionColor = 'indigo';
    if(answered){
      questionColor = 'mdb-color lighten-2';
    }

    return (
      <Container>
        <Card color={questionColor} onClick={this.toggle} text='white' className='text-center' style={{ marginTop: '15px', cursor: '' }}>
          <CardBody>
            <div style={{fontSize: '24px'}}>
              {front}
            </div>
          </CardBody>
        </Card>
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
