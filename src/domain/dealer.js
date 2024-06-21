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

  // TODO: Add validations for the remaining cards on deck
  // TODO: Add validations for the game state and block actions
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

  // TODO: Add validations for the remaining cards on deck
  // TODO: Add validations for the game state and block actions
  stand(player) {
    this.hand.revealHold()

    while (this.hand.points < 17) {
      const card = this.deck.draw()
      card.turnUp()
      this.hand.add(card)
    }

    if (this.hand.isBusted() || player.points() > this.hand.points) {
      return RoundResult.PLAYER_WINS
    }

    return RoundResult.DEALER_WINS
  }
}

export { Dealer }
