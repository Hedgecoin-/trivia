import React from 'react';
import { Container, Row, Col } from 'mdbreact';

import ScrollText from './ScrollText.js';
import Answer from './Answer.js';
import PlayerAnswerBoard from '../Player/PlayerAnswerBoard.js';

function QuestionBody(props) {
  const { text, answer, multiple } = props;

  let output;
  if (multiple) {
    output = `The question is: \n\t${text}%c`;
  }
  else {
    output = `The question is: \n\t${text}\n\t%c${answer}`;
  }

  console.log(output, 'background: #434A54; color: #E6E9ED');

  return (
    <Container>
      <Row>
        <Col md={'10'}>
          <ScrollText text={text} />
          <Answer answer={answer} multiple={multiple} />
        </Col>
        <Col md={'2'}>
          <PlayerAnswerBoard multiple={multiple} />
        </Col>
      </Row>
    </Container>
  )
}

export default QuestionBody;
