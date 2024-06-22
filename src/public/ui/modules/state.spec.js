import { UI } from "../constants.js"
import { State } from "./state"

describe('State', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <p id="${UI.WINNER_BANNER_ID}"></p>
      <button id="${UI.ACTIONS_HIT_ID}">Hit</button>
      <button id="${UI.ACTIONS_STAND_ID}">Stand</button>
    `
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe.only('update', () => {
    it.each`
      gameState        | expectedText
      ${'CONTINUE'}    | ${'State: -'}
      ${'PLAYER_WINS'} | ${'State: Player wins'}
      ${'DEALER_WINS'} | ${'State: Dealer wins'}
    `('should display the game state', ({ gameState, expectedText }) => {
      const game = {
        state: gameState,
      }
      const state = new State(game)

      state.update(game)

      const component = document.getElementById(UI.WINNER_BANNER_ID)
      expect(component.innerText).toEqual(expectedText)
    })

    it.each(['DEALER_WINS', 'PLAYER_WINS'])
      ('should disable the action buttons for the game state: %s', () => {
        const game = {
          state: 'DEALER_WINS'
        }
        const state = new State(game)

        state.update(game)

        const component = document.getElementById(UI.ACTIONS_HIT_ID)
        expect(component.disabled).toBeTruthy()
      })

    it('should NOT disable the action buttons', () => {
      const game = {
        state: 'CONTINUE'
      }
      const state = new State(game)

      state.update(game)

      const component = document.getElementById(UI.ACTIONS_HIT_ID)
      expect(component.disabled).toBeFalsy()
    })
  })
})
