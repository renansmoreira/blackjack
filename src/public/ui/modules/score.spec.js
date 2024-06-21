import { UI } from "../constants"
import { Score } from "./score"

describe('Score', () => {
  const game = {
    dealer: {
      hand: {
        points: 10
      }
    },
    player: {
      hand: {
        points: 21
      }
    }
  }

  beforeEach(() => {
    document.body.innerHTML = `
      <p id="${UI.DEALER_POINTS_CONTAINER_ID}"></p>
      <p id="${UI.PLAYER_POINTS_CONTAINER_ID}"></p>
    `
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('update', () => {
    it('should display the dealer points', () => {
      const expectedPoints = 10
      const score = new Score()

      score.update(game)

      const component = document.getElementById(UI.DEALER_POINTS_CONTAINER_ID)
      expect(component.innerText).toEqual(expectedPoints)
    })

    it('should display the player points', () => {
      const expectedPoints = 21
      const score = new Score()

      score.update(game)

      const component = document.getElementById(UI.PLAYER_POINTS_CONTAINER_ID)
      expect(component.innerText).toEqual(expectedPoints)
    })
  })
})
