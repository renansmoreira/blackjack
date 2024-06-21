import { UI } from "../constants.js"

class Score {
  update(game) {
    document.getElementById(UI.DEALER_POINTS_CONTAINER_ID).innerText = game.dealer.hand.points
    document.getElementById(UI.PLAYER_POINTS_CONTAINER_ID).innerText = game.player.hand.points
  }
}

export { Score }
