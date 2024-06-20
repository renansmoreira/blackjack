class Dealer {
  deck = {}
  hand = []

  constructor(deck) {
    this.deck = deck
  }

  startGame(player) {
    const firstCard =this.deck.draw()
    firstCard.turnUp()

    const secondCard = this.deck.draw()
    secondCard.turnUp()

    player.collectCard(firstCard)
    player.collectCard(secondCard)

    const dealerCard = this.deck.draw()
    dealerCard.turnUp()

    this.hand.push(dealerCard)
    this.hand.push(this.deck.draw())
  }
}

export { Dealer }
