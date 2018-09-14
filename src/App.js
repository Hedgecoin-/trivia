import React, { Component } from 'react';
import { Grid, Row, Jumbotron, ListGroup} from 'react-bootstrap';

import AddPlayer from './AddPlayer.js';
import Player from './Player.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: defaultPlayers,
    }
  }

  addPlayer = (name) => {
    let newPlayer = {
      name: name,
      score: 0,
    }

    this.setState({
      players: [...this.state.players, newPlayer]
    });
  }

  modifyScore = (name, adjustment) => {
    const { players } = this.state;

    let newPlayerList = [...players];
    for(let i=0; i < newPlayerList.length; i++){
      let player = newPlayerList[i];
      if(player.name === name){
        player.score += adjustment;
        break;
      }
    }

    this.setState({ players: newPlayerList });
  }

  removePlayer = (name) => {
    const { players } = this.state;

    let index = -1;
    for(let i=0; i < players.length; i++){
      let player = players[i];
      if(player.name === name){
        index = i;
        break;
      }
    }
    let newPlayerList = [...players];
    newPlayerList.splice(index, 1);

    this.setState({ players: newPlayerList });
  }


  render() {
    const { players } = this.state;

    players.sort((a, b) => {
      if(a.score === b.score){
        let an = a.name.toLowerCase();
        let bn = b.name.toLowerCase();
        if(an < bn){
          return -1;
        }
        if(an > bn){
          return 1;
        }
        return 0;
      }
      return b.score - a.score;
    });

    let playerlist = [];
    for(let i=0; i < players.length; i++){
      let player = players[i];
      playerlist.push(
        <Player key={i} score={player.score} name={player.name}
          addPoint={() => this.modifyScore(player.name, 1) }
          losePoint={() => this.modifyScore(player.name, -1) }
          remove={ () => this.removePlayer(player.name) }
        />
      );
    }

    return (
      <Grid>
        <Row>
          <AddPlayer addPlayer={this.addPlayer} />
        </Row>
        <Row>
          <Jumbotron>
            <h1>Trivia Score</h1>
            <ListGroup>
              {playerlist}
            </ListGroup>
          </Jumbotron>
        </Row>
      </Grid>
    );
  }
}



let defaultPlayers = [
  {
    name: 'Tom',
    score: 0,
  },
  {
    name: 'Alex T',
    score: 0,
  },
  {
    name: 'Mark',
    score: 0,
  },
  {
    name: 'Shanel',
    score: 0,
  },
  {
    name: 'Nabeel',
    score: 0,
  },
  {
    name: 'Simone',
    score: 0,
  },
  {
    name: 'Steve',
    score: 0,
  },
  {
    name: 'Paul',
    score: 0,
  },
  {
    name: 'Alain',
    score: 0,
  },
  {
    name: 'Bruce',
    score: 0,
  },
  {
    name: 'Brian',
    score: 0,
  }
]


export default App;
