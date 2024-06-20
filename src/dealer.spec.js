import { Deck } from "./deck.js"
import { Dealer } from "./dealer.js"
import { Player } from "./player.js"
import { Face } from "./face.js"
import { Card } from "./card.js"
import { Suit } from "./suit.js"
import { RoundResult } from "./roundResult.js"

describe('Dealer', () => {
  describe('when constructing', () => {
    it('should create with the necessary info', () => {
      const expectedDeck = new Deck()

      const dealer = new Dealer(expectedDeck)

      expect(dealer.deck).toEqual(expectedDeck)
      expect(dealer.hand.cards).toHaveLength(0)
    })
  })

  describe('startGame', () => {
    const deck = new Deck()
    const player = new Player()

    it('should deal two cards to the player', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(player.hand.cards).toHaveLength(2)
      expect(player.hand.cards[0].face).toEqual(Face.UP)
      expect(player.hand.cards[1].face).toEqual(Face.UP)
    })

    it('should deal two card to himself', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(dealer.hand.cards).toHaveLength(2)
      expect(dealer.hand.cards[0].face).toEqual(Face.UP)
    })

    it('should keep one of the dealer cards faced down (the hold)', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(dealer.hand.cards[1].face).toEqual(Face.DOWN)
    })
  })

  describe('hit', () => {
    it('should hit for the player', () => {
      const deck = new Deck()
      const dealer = new Dealer(deck)
      const player = new Player('Player 1')
      dealer.startGame(player)

      dealer.hit(player)

      expect(player.hand.cards).toHaveLength(3)
    })

    it('should continue if the player has not a blackjack and is not busted', () => {
      const deck = new Deck()
      deck.cards = [
        new Card(5, Suit.CLUBS, 5),
        new Card(5, Suit.HEARTS, 5),
        new Card(2, Suit.SPADES, 2),
        new Card(2, Suit.DIAMONDS, 2),
        new Card(10, Suit.SPADES, 10),
      ]
      const dealer = new Dealer(deck)
      const player = new Player('Player 1')
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.CONTINUE)
    })

    it('should check if the player is busted', () => {
      const deck = new Deck()
      deck.cards = [
        new Card(10, Suit.CLUBS, 10),
        new Card(10, Suit.HEARTS, 10),
        new Card(2, Suit.SPADES, 2),
        new Card(2, Suit.DIAMONDS, 2),
        new Card(10, Suit.SPADES, 10),
      ]
      const dealer = new Dealer(deck)
      const player = new Player('Player 1')
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.DEALER_WINS)
    })

    it('should check if the player has a blackjack', () => {
      const deck = new Deck()
      deck.cards = [
        new Card(10, Suit.CLUBS, 10),
        new Card(8, Suit.HEARTS, 8),
        new Card(2, Suit.SPADES, 2),
        new Card(2, Suit.DIAMONDS, 2),
        new Card(3, Suit.SPADES, 3),
      ]
      const dealer = new Dealer(deck)
      const player = new Player('Player 1')
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.PLAYER_WINS)
    })

    it('should allow the player to hit if the game needs to continue', () => {
      const deck = new Deck()
      deck.cards = [
        new Card(5, Suit.CLUBS, 5),
        new Card(5, Suit.HEARTS, 5),
        new Card(2, Suit.SPADES, 2),
        new Card(2, Suit.DIAMONDS, 2),
        new Card(3, Suit.SPADES, 3),
        new Card(3, Suit.HEARTS, 3),
      ]
      const dealer = new Dealer(deck)
      const player = new Player('Player 1')
      dealer.startGame(player)
      dealer.hit(player)

      const result = dealer.hit(player)

      expect(player.hand.cards).toHaveLength(4)
      expect(result).toEqual(RoundResult.CONTINUE)
    })
  })
})
