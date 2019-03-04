import React from 'react';
import { ListGroup } from 'mdbreact';

import PlayerAnswer from './PlayerAnswer.js';
import PlayerStore from './PlayerStore.js';

function PlayerAnswerBoard (props) {
  const playerList = PlayerStore.players;
  return (
    <ListGroup>
      {
        playerList.map(player => {
          return <PlayerAnswer key={player.name} name={player.name} multiple={props.multiple} />
        })
      }
    </ListGroup>
  )

}

export default PlayerAnswerBoard;
