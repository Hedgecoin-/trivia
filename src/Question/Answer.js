import React, { Component } from 'react';
import { Button , Collapse } from 'mdbreact';

class Answer extends Component {
  state = {
    collapse: false,
  }

  toggle = () => {
    this.setState({ collapse : !this.state.collapse });
  }

  render(){
    const { answer } = this.props;
    return (
      <div className="text-center" style={styles}>
        <Button color="primary" onClick={this.toggle}>Show Answer</Button>
        <Collapse isOpen={this.state.collapse}>
          <div style={{ fontWeight: 'bold' }}>
            {answer}
          </div>
        </Collapse>
      </div>
    )
  }
}

const styles = {
  marginTop: '50px',
}

export default Answer;
