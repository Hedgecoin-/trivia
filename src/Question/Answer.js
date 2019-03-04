import React, { Component } from 'react';
import { Button , Collapse } from 'mdbreact';

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: props.multiple ? true : false,
      shownAnswers: {},
    }
  }

  toggle = () => {
    this.setState({ collapse : !this.state.collapse });
  }

  showMultipleAnswers = (e) => {
    if (isNaN(e.key)) {
      return;
    }

    let newShownAnswers = Object.assign({}, this.state.shownAnswers);
    const { answer } = this.props;
    const key = parseInt(e.key, 10);
    if (key > answer.length + 1 || key === 0) {
      return;
    }

    if (newShownAnswers[key] !== undefined) {
      newShownAnswers[key]['show'] = !newShownAnswers[key]['show']
    }
    else {
      newShownAnswers[key] = {
        text: answer[key - 1],
        show: true,
      };
    }
    
    this.setState({ shownAnswers: newShownAnswers });
    
  }

  componentDidMount(){
    window.addEventListener('keydown', this.showMultipleAnswers);
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.showMultipleAnswers);
  }

  render() {
    const { shownAnswers } = this.state;
    const { answer, multiple } = this.props;

    

    let answerText;
    if (multiple) {
      let guessedAnswers = [];
      for(let key in shownAnswers){
        if (shownAnswers[key].show) {
          guessedAnswers.push(shownAnswers[key].text);
        }
      }
      
      let remainingAnswers = [];
      answerLoop:
      for (let i = 0; i < answer.length; i++){
        for (let j = 0; j < guessedAnswers.length; j++){
          if (answer[i] === guessedAnswers[j]) {
            continue answerLoop;
          }
        }
        remainingAnswers.push(`[${i+1}] ${answer[i]}`);
      }

      answerText = guessedAnswers.join(', ');
      console.log("Remaining answers are: \n\t" + remainingAnswers.join('\n\t'));
    }
    else {
      answerText = answer;
    }

    return (
      <div className="text-center" style={styles}>
        <Button color="primary" onClick={this.toggle}>Show Answer</Button>
        <Collapse isOpen={this.state.collapse}>
          <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
            {answerText}
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
