import React from 'react';
import { Container, Row, Col } from 'mdbreact';

import ScrollText from './ScrollText.js';
import Answer from './Answer.js';
import PlayerAnswerBoard from '../Player/PlayerAnswerBoard.js';

function QuestionBody(props) {
  const { text, answer } = props;

  return (
    <Container>
      <Row>
        <Col md={'10'}>
          <ScrollText text={text} />
          <Answer answer={answer} />
        </Col>
        <Col md={'2'}>
          <PlayerAnswerBoard />
        </Col>
      </Row>
    </Container>
  )
}

export default QuestionBody;
