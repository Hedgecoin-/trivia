import React, { Component } from 'react';

import { Form, FormGroup, FormControl, Button, Col } from 'react-bootstrap';

class AddPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleClick = () => {
    console.log("Adding Player " + this.state.value);
    this.props.addPlayer(this.state.value);
    this.setState({ value: '' });
  }

  render(){
    return (
      <Form horizontal>
        <FormGroup >
          <Col md={4}>
            <FormControl type="text" value={this.state.value} placeholder="Player name" onChange={this.handleChange} />
          </Col>
          <Col md={4}>
            <Button onClick={this.handleClick}>Add Player</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default AddPlayer;
