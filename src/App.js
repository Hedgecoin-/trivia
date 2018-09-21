import React, { Component } from 'react';

import { Container, ButtonFixed, Row, Col } from 'mdbreact';

import Board from './Board.js';
import AddPlayer from './AddPlayer.js';
import Player from './Player.js';
import PlayerStore from './Player/PlayerStore.js';
import PlayerScoreList from './Player/PlayerScoreList.js';

import { defaultData, defaultPlayers } from './defaultData';
import { realData } from './realData';

class App extends Component {

  componentDidMount(){
    for(let i=0; i < realData.players.length; i++){
      let player = realData.players[i];
      PlayerStore.addPlayer(player);
    }
  }

  toggleNewPlayer = () => {
    let name = prompt("Please enter new player name");
    if(name !== null){
      PlayerStore.addPlayer({ name: name, score: 0 });
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={'10'}>
            <Board categories={realData.categories} />
          </Col>
          <Col md={'2'}>
            <PlayerScoreList playerList={PlayerStore.players}/>
          </Col>
        </Row>
        <ButtonFixed floating size="lg" color="red" icon="user" onClick={this.toggleNewPlayer} />
      </Container>
    )
  }
}

export default App;
