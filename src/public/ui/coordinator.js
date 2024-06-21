import { UI } from "./constants.js"
import { Cards } from "./modules/cards.js"
import { Score } from "./modules/score.js"
import { State } from "./modules/state.js"

class Coordinator {
  game = {}
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

  async hit() {
    this.game = await this.httpClient.post(`/hit/${this.game.id}`)
    this.update(this.game)
  }

  async stand() {
    this.game = await this.httpClient.post(`/stand/${this.game.id}`)
    this.update(this.game)
  }

  async restart() {
    this.start()
  }

  update(result) {
    this.updateCards()
    this.updateScore()
    this.updateGameState(result)
  }

  async start() {
    this.game = await this.httpClient.post('/start')
    this.update(this.game)
  }

  update(game) {
    this.cards.update(game)
    this.score.update(game)
    this.state.update(game)
  }
}

export { Coordinator }
