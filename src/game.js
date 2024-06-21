import { Dealer } from "./dealer.js"
import { Player } from "./player.js"
import { Deck } from "./deck.js"
import { RoundResult } from "./roundResult.js"

class Game {
  id = ''
  dealer = {}
  player = {}
  state = RoundResult.CONTINUE

  constructor(id) {
    this.id = id

    const deck = new Deck()
    this.dealer = new Dealer(deck)
    this.player = new Player('Player')
  }

  start() {
    this.dealer.startGame(this.player)
    console.log('Starting game id:', this.id)
  }
}

export { Game }
