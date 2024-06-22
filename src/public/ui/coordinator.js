import { UI } from "./constants.js"
import { Cards } from "./modules/cards.js"
import { ErrorMessage } from "./modules/errorMessage.js"
import { Score } from "./modules/score.js"
import { State } from "./modules/state.js"

class Coordinator {
  game = {}
  cards = new Cards()
  score = new Score()
  state = new State()
  errorMessage = new ErrorMessage()
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
    try {
      this.game = await this.httpClient.put(`/hit/${this.game.id}`)
      this.update(this.game)
    } catch {
      this.errorMessage.display()
    }
  }

  async stand() {
    try {
      this.game = await this.httpClient.put(`/stand/${this.game.id}`)
      this.update(this.game)
    } catch {
      this.errorMessage.display()
    }
  }

  async restart() {
    this.start()
  }

  async start() {
    try {
      this.game = await this.httpClient.post('/start')
      this.update(this.game)
    } catch {
      this.errorMessage.display()
    }
  }

  update(game) {
    this.errorMessage.hide()
    this.cards.update(game)
    this.score.update(game)
    this.state.update(game)
  }
}

export { Coordinator }
