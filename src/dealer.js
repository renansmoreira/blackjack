import { Hand } from "./hand.js"
import { RoundResult } from "./roundResult.js"

class Dealer {
  deck = {}
  hand = new Hand()

  constructor(deck) {
    this.deck = deck
  }

  startGame(player) {
    const firstCard = this.deck.draw()
    firstCard.turnUp()

    const secondCard = this.deck.draw()
    secondCard.turnUp()

    player.collectCard(firstCard)
    player.collectCard(secondCard)

    const dealerCard = this.deck.draw()
    dealerCard.turnUp()

    this.hand.add(dealerCard)
    this.hand.add(this.deck.draw())
  }

  hit(player) {
    const card = this.deck.draw()
    card.turnUp()

    player.collectCard(card)

    if (player.isBusted()) {
      return RoundResult.DEALER_WINS
    }

    if (player.hasBlackJack()) {
      return RoundResult.PLAYER_WINS
    }

    return RoundResult.CONTINUE
  }
}

export { Dealer }
