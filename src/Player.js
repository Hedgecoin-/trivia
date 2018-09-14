import React, { Component } from 'react';
import { Badge, Button, Fa } from 'mdbreact';

class Player extends Component {
  constructor(props){
    super(props);
    this.state = {
      hovered: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  }

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  }

  render(){
    const { hovered } = this.state;

    let rowStyle = hovered ? style.hovered: {};

    let scoreColor = "info";
    if(this.props.score > 0){
      scoreColor = "primary";
    }
    else if(this.props.score < 0){
      scoreColor = "secondary";
    }

    return (
      <div className="row" style={rowStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="col-1" style={style.nameCol}>
          <Badge color={scoreColor}>{this.props.score}</Badge>
        </div>
        <div className="col-5" style={style.nameCol}>
          <span style={{ fontSize: "20px"}}>
            {this.props.name}
          </span>
        </div>
        <div className="col-2"></div>
        <div className="col-1">
          <Button tag="a" size="sm" floating color="success" onClick={this.props.addPoint}><Fa icon="check" /></Button>
        </div>
        <div className="col-1">
          <Button tag="a" size="sm" floating color="danger" onClick={this.props.losePoint}><Fa icon="times" /></Button>
        </div>
        <div className="col-1" />
        <div className="col-1">
          <Button tag="a" size="sm" floating color="elegant" onClick={this.props.remove}><Fa icon="trash" /></Button>
        </div>
      </div>
    )
  }
}


const style = {
  hovered: {
    boxShadow: "0px 2px 5px rgba(0,0,0,0.15)",
  },
  nameCol: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }
}

export default Player;
