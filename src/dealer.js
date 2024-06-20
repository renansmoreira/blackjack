import { Hand } from "./hand.js"

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
}

export { Dealer }
