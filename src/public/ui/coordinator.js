import { UI } from "./constants"
import { Cards } from "./modules/cards"
import { Score } from "./modules/score"
import { State } from "./modules/state"

class Coordinator {
  cards = new Cards()
  score = new Score()
  state = new State()
  httpClient = {}

  constructor(httpClient) {
    this.httpClient = httpClient
  }

  registerControls() {
    document
      .getElementById(UI.ACTIONS_HIT_ID)
      .addEventListener('click', () => {
        this.hit()
      })

    document
      .getElementById(UI.ACTIONS_STAND_ID)
      .addEventListener('click', () => {
        this.stand()
      })

    document
      .getElementById(UI.ACTIONS_RESTART_ID)
      .addEventListener('click', () => {
        this.restart()
      })
  }

  hit() {
  }

  stand() {
  }

  restart() {
  }

  update(result) {
    this.updateCards()
    this.updateScore()
    this.updateGameState(result)
  }

  async start() {
    const game = await this.httpClient.post('/start')
    this.update(game)
  }

  update(game) {
    this.cards.update(game)
    this.score.update(game)
    this.state.update(game)
  }
}

export { Coordinator }
