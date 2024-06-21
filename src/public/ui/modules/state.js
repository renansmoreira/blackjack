import { UI } from "../constants.js"

class State {
  update(game) {
    const winnerText = game.state === 'CONTINUE' ? '-' : game.state
    document.getElementById(UI.WINNER_BANNER_ID).innerText = `Winner: ${winnerText}`

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
