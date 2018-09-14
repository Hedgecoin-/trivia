import React, { Component } from 'react';
import { ListGroupItem, Badge, Row, Col, Button, Glyphicon } from 'react-bootstrap';

class Player extends Component {
  render(){
    return (
      <ListGroupItem>
        <Row>
          <Col md={1}>
            <Badge pullRight={true} style={{ fontSize: "20px", marginTop: '1px' }}>{this.props.score}</Badge>
          </Col>
          <Col md={5}>
            <span style={{ fontSize: "20px"}}>
              {this.props.name}
            </span>
          </Col>
          <Col mdOffset={2} md={1}>
            <Button bsStyle="success" onClick={this.props.addPoint}>+1</Button>
          </Col>
          <Col md={1}>
            <Button bsStyle="danger" onClick={this.props.losePoint}>-1</Button>
          </Col>
          <Col md={1} />
          <Col md={1}>
            <div className="h">
              <Glyphicon style={{ fontSize: 'large', marginTop: '9px', color: '#7d8b98' }} glyph="trash" onClick={this.props.remove}/>
            </div>
          </Col>
        </Row>
      </ListGroupItem>
    )
  }
}

export default Player;
