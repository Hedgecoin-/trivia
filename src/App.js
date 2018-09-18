import React, { Component } from 'react';

import { ButtonFixed } from 'mdbreact';

import AddPlayer from './AddPlayer.js';
import Player from './Player.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: defaultPlayers,
    }
  }

  componentDidMount(){
    this.sortPlayers();
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

  sortPlayers = () => {
    const { players } = this.state;

    const sortedPlayers = [].concat(players).sort((a, b) => {
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

    this.setState({ players: sortedPlayers });
  }

  renderPlayers = () => {
    const { players } = this.state;

    // players.sort((a, b) => {
    //   if(a.score === b.score){
    //     let an = a.name.toLowerCase();
    //     let bn = b.name.toLowerCase();
    //     if(an < bn){
    //       return -1;
    //     }
    //     if(an > bn){
    //       return 1;
    //     }
    //     return 0;
    //   }
    //   return b.score - a.score;
    // });

    let playerlist = [];
    for(let i=0; i < players.length; i++){
      let player = players[i];
      let pointGain = 2;
      let pointLoss = -1;

      if(player.name === "Steve" || player.name === "Alain"){
        pointGain = 1;
      }

      playerlist.push(
        <Player key={i} score={player.score} name={player.name}
          addPoint={() => this.modifyScore(player.name, pointGain) }
          losePoint={() => this.modifyScore(player.name, pointLoss) }
          remove={ () => this.removePlayer(player.name) }
        />
      );
    }

    return playerlist;
  }


  render() {

    return (
      <div className="container">
        <AddPlayer addPlayer={this.addPlayer} />
        <ButtonFixed floating size="lg" color="red" icon="random" onClick={this.sortPlayers} />
        <div className="row">
          <h1>Trivia Score</h1>
        </div>
        {this.renderPlayers()}
      </div>
    );
  }
}


let defaultPlayers = [
  {
    name: 'Tom',
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
  },
  {
    name: 'Matt',
    score: 0,
  },
  {
    name: 'Yannick',
    score: 0,
  },
  {
    name: 'Dicong',
    score: 0,
  },
  {
    name: 'Jacques',
    score: 0,
  },

]


export default App;
