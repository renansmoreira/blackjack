import { Suit } from "./suit.js"
import { Card } from "./card.js"
import { Face } from "./face.js"
import { CardValue } from "./cardValue.js"

describe('Card', () => {
  describe('when creating', () => {
    it('should have all necessary attributes', () => {
      const expectedValue = '7'
      const expectedSuit = Suit.CLUBS

      const card = new Card(expectedValue, expectedSuit)

      expect(card.value).toEqual(expectedValue)
      expect(card.suit).toEqual(expectedSuit)
      expect(card.face).toEqual(Face.DOWN)
    })
  })

  describe('turnUp', () => {
    it('should turn the card up', () => {
      const card = new Card(CardValue.A, Suit.CLUBS)

      card.turnUp()

      expect(card.face).toEqual(Face.UP)
    })
  })

  describe('isVisible', () => {
    let card;

    beforeEach(() => {
      card = new Card(CardValue.K, Suit.SPADES)
    })

    it('should check that the card if turned up', () => {
      card.turnUp()

      const result = card.isVisible()

      expect(result).toBeTruthy()
    })

    it('should check that the card if turned down', () => {
      const result = card.isVisible()

      expect(result).toBeFalsy()
    })
  })
})
