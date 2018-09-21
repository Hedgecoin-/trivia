import React, { Component } from 'react';
import { ListGroup } from 'mdbreact';

import PlayerStore from './PlayerStore.js';
import PlayerScoreItem from './PlayerScoreItem.js';

class PlayerScoreList extends Component {

  componentDidMount(){
    this.refreshList();
  }

  refreshList = () => {
    this.forceUpdate();
    setTimeout(() => {
      this.refreshList();
    }, 1000);
  }

  render(){

    let playerList = PlayerStore.players;

    let sortedPlayers = [].concat(playerList).sort((a, b) => {
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

    return (
      <ListGroup style={{ marginTop: '150px'}}>
        {sortedPlayers.map(p => {
          return <PlayerScoreItem key={p.name} name={p.name} score={p.score} />
        })}
      </ListGroup>
    )
  }
}

export default PlayerScoreList;
