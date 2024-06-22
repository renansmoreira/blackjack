import { UI } from "../constants.js"

const descriptionMap = new Map([
  ['PLAYER_WINS', 'Player wins'],
  ['DEALER_WINS', 'Dealer wins'],
  ['DRAW', 'Draw!'],
])

class State {
  update(game) {
    const winnerText = game.state === 'CONTINUE' ? '-' : descriptionMap.get(game.state)
    document.getElementById(UI.WINNER_BANNER_ID).innerText = `State: ${winnerText}`

    if (!game.state || game.state === 'CONTINUE') {
      document.getElementById(UI.ACTIONS_HIT_ID).disabled = false
      document.getElementById(UI.ACTIONS_STAND_ID).disabled = false
      return;
    }

    document.getElementById(UI.ACTIONS_HIT_ID).disabled = true
    document.getElementById(UI.ACTIONS_STAND_ID).disabled = true
  }
}

export { State }
