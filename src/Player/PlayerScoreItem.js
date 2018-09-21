import React, { Component } from 'react';
import { Badge, Row, Col } from 'mdbreact';

class PlayerScoreItem extends Component {
  render(){
    const { name, score } = this.props;

    let scoreColor = "info";
    if(score > 0){
      scoreColor = "primary";
    }
    else if(score < 0){
      scoreColor = "secondary";
    }

    return (
      <Row>
        <Col md={'2'}>
          <Badge color={scoreColor}>{score}</Badge>
        </Col>
        <Col md={'8'}>
          <span style={{ fontSize: "20px"}}>
            {name}
          </span>
        </Col>
      </Row>
    )
  }
}

export default PlayerScoreItem;
