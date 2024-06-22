import { Dealer } from "../domain/dealer.js"
import { Player } from "../domain/player.js"
import { Deck } from "../domain/deck.js"
import { RoundResult } from "../domain/roundResult.js"

class Game {
  id = ''
  dealer = {}
  player = {}
  state = RoundResult.CONTINUE

  constructor(id, shuffleStrategy) {
    this.id = id

    const deck = new Deck(shuffleStrategy)
    this.dealer = new Dealer(deck)
    this.player = new Player('Player')
  }

  start() {
    this.dealer.startGame(this.player)
  }

  hit() {
    if (this.state === RoundResult.CONTINUE) {
      this.state = this.dealer.hit(this.player)
    }
  }

  stand() {
    if (this.state === RoundResult.CONTINUE) {
      this.state = this.dealer.stand(this.player)
    }
  }
}

class GameNullObject {
  id = ''
  dealer = {}
  player = {}
  state = RoundResult.CONTINUE
}

export { Game, GameNullObject }
