import { UI } from "../constants.js"
import { Cards } from "./cards"

describe('Cards', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <p id="${UI.DEALER_CARDS_CONTAINER_ID}"></p>
      <p id="${UI.PLAYER_CARDS_CONTAINER_ID}"></p>
    `
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  describe('update', () => {
    it('should display the dealer cards', () => {
      const game = {
        dealer: {
          hand: {
            cards: [
              {
                isVisible: true,
                value: 'A',
                suit: 'HEARTS'
              },
              {
                isVisible: true,
                value: '10',
                suit: 'CLUBS'
              }
            ]
          }
        },
        player: {
          hand: {
            cards: []
          }
        }
      }
      const cards = new Cards()

      cards.update(game)

      const component = document.getElementById(UI.DEALER_CARDS_CONTAINER_ID)
      expect(component.querySelectorAll('span')[0].innerText).toEqual('A')
      expect(component.querySelectorAll('img')[0].src).toEqual('http://localhost/assets/hearts.png')
      expect(component.querySelectorAll('span')[1].innerText).toEqual('10')
      expect(component.querySelectorAll('img')[1].src).toEqual('http://localhost/assets/clubs.png')
    })

    it('should not display cards faced down', () => {
      const game = {
        dealer: {
          hand: {
            cards: [
              {
                isVisible: true,
                value: 'A',
                suit: 'HEARTS'
              },
              {
                isVisible: false,
                value: '10',
                suit: 'CLUBS'
              }
            ]
          }
        },
        player: {
          hand: {
            cards: []
          }
        }
      }
      const cards = new Cards()

      cards.update(game)

      const component = document.getElementById(UI.DEALER_CARDS_CONTAINER_ID)
      expect(component.querySelectorAll('span')[0].innerText).toEqual('A')
      expect(component.querySelectorAll('img')[0].src).toEqual('http://localhost/assets/hearts.png')
      expect(component.querySelectorAll('span')[1].innerText).toEqual('?')
      expect(component.querySelectorAll('img')[1].src).toEqual('http://localhost/assets/question.png')
    })

    it('should display the player cards', () => {
      const expectedCards = 'K DIAMONDS | 3 HEARTS'
      const game = {
        dealer: {
          hand: {
            cards: [
            ]
          }
        },
        player: {
          hand: {
            cards: [
              {
                isVisible: true,
                value: 'K',
                suit: 'DIAMONDS'
              },
              {
                isVisible: true,
                value: '3',
                suit: 'HEARTS'
              }
            ]
          }
        }
      }
      const cards = new Cards()

      cards.update(game)

      const component = document.getElementById(UI.PLAYER_CARDS_CONTAINER_ID)
      expect(component.querySelectorAll('span')[0].innerText).toEqual('K')
      expect(component.querySelectorAll('img')[0].src).toEqual('http://localhost/assets/diamonds.png')
      expect(component.querySelectorAll('span')[1].innerText).toEqual('3')
      expect(component.querySelectorAll('img')[1].src).toEqual('http://localhost/assets/hearts.png')
    })
  })
})
