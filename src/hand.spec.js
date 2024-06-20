import { Card } from "./card.js"
import { Hand } from "./hand.js"
import { Suit } from "./suit.js"

describe('Hand', () => {
  describe('add', () => {
    let card;
    let anotherCard

    beforeEach(() => {
      card = new Card(10, Suit.DIAMONDS, 10)
      anotherCard = new Card(2, Suit.HEARTS, 2)
    })

    it('should add one card', () => {
      const hand = new Hand()

      hand.add(card)

      expect(hand.cards).toEqual([card])
    })

    it('should add multiple cards', () => {
      const hand = new Hand()
      hand.add(card)

      hand.add(anotherCard)

      expect(hand.cards).toEqual([card, anotherCard])
    })

    it('should update the points', () => {
      card.turnUp()
      anotherCard.turnUp()
      const hand = new Hand()
      hand.add(card)

      hand.add(anotherCard)

      expect(hand.points).toEqual(12)
    })

    it('should not update the points for cards faced down', () => {
      card.turnUp()
      const hand = new Hand()
      hand.add(card)

      hand.add(anotherCard)

      expect(hand.points).toEqual(10)
    })
  })
})
