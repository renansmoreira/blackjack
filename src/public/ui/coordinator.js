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
