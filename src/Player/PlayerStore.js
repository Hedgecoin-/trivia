
/*
  {
    name: 'Tom',
    score: 0,
  },
*/

class Player {
  constructor(data){
    this.name = data.name || "No Name";
    this.score = data.score || 0;
  }
}

class PlayerStore {
  constructor(){
    this.players = [];
    this.roundStatus = [];
  }

  setRoundStatus(name, points, multiple = false){
    // update
    for(let i=0; i < this.roundStatus.length; i++){
      let status = this.roundStatus[i];
      if(status.name === name){
        console.log(`Updating status of ${name} with ${points} points`)
        this.roundStatus[i] = {
          name: name,
          points: points,
          multiple: multiple,
        }
        return;
      }
    }

    // otherwise add
    console.log(`Adding status of ${name} with ${points} points`)
    this.roundStatus.push({
      name: name,
      points: points,
      multiple: multiple,
    });
  }

  completeRound() {
    let multipleWinner = true;
    for(let i=0; i < this.roundStatus.length; i++){
      let status = this.roundStatus[i];
      if(status.multiple && multipleWinner) {
        this.addPointsByName(status.name, status.points * 2);

        if (status.points > 0) {
          multipleWinner = false;
        }
      }
      else {
        this.addPointsByName(status.name, status.points);
      }

    }
    this.roundStatus = [];
  }

  addPlayer(player){
    let newPlayer = new Player(player);
    for(let i=0; i<this.players.length; i++){
      let player = this.players[i];
      if(player.name === newPlayer.name){        
        return;
      }
    }
    this.players.push(newPlayer);
  }

  addPointsByName(name, points){
    for(let i=0; i<this.players.length; i++){
      let player = this.players[i];
      if (player.name === name) {
        console.log(`Modifying ${player.name} score by ${points}`);
        player.score = player.score + points;
        return;
      }
    }
  }
}

var store = window.playerStore = new PlayerStore();
export default store;
