import { UI } from "../constants.js"

class Cards {
  update(game) {
    document.getElementById(UI.DEALER_CARDS_CONTAINER_ID).innerText = game.dealer
      .hand
      .cards
      .map(card => {
        if (!card.isVisible) {
          return `?`
        }

        return `${card.value} ${card.suit}`
      })
      .join(' | ')

    document.getElementById(UI.PLAYER_CARDS_CONTAINER_ID).innerText = game.player
      .hand
      .cards
      .map(card => `${card.value} ${card.suit}`)
      .join(' | ')
  }
}

export { Cards }
