import React, { Component } from 'react';
import { Chip } from 'mdbreact';

import PlayerStore from './PlayerStore';

class PlayerAnswer extends Component {
  state = {
    correct: false,
    answered: false,
  }

  handleWrong = (e) => {
    const { name, multiple } = this.props;
    const { correct, answered } = this.state;

    e.stopPropagation();

    if(!correct && answered){
      this.setState({ correct: false, answered: false })
      PlayerStore.setRoundStatus(name, 0, multiple)
    }
    else {
      this.setState({ correct: false, answered: true })
      PlayerStore.setRoundStatus(name, -1, multiple)
    }
  }

  handleRight = () => {
    const { name, multiple } = this.props;
    const { correct, answered } = this.state;

    let points = 2;
    if(name === 'Steve' || name === 'Alain'){
      points = 1;
    }

    if(correct && answered){
      this.setState({ correct: false, answered: false })
      PlayerStore.setRoundStatus(name, 0, multiple)
    }
    else {
      this.setState({ correct: true, answered: true })
      PlayerStore.setRoundStatus(name, points, multiple)
    }


  }

  render(){
    const { correct, answered } = this.state;
    const { name } = this.props;

    let color = '';
    if(answered){
      color = correct ? 'success-color' : 'danger-color';
    }

    return (
      <Chip src="https://via.placeholder.com/50x50" bgColor={color} waves close onClick={this.handleRight} handleClose={this.handleWrong}>{name}</Chip>
    )
  }
}

export default PlayerAnswer;
