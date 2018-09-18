import React, { Component } from 'react';

import { Button, Input } from 'mdbreact';

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
    const { value } = this.state;
    this.props.addPlayer(value);
    this.setState({ value: ' ' });
  }

  render(){
    const { value } = this.state;
    return (
      <div className="row">
        <div className="col">
          <Input value={value} label="Player name" icon="user" onChange={this.handleChange} />
        </div>
        <div className="col">
          <Button color="elegant" onClick={this.handleClick}>Add Player</Button>
        </div>
      </div>
    )
  }
}

export default AddPlayer;
