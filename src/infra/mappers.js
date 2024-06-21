class Mappers {
  mapCard(card) {
    return {
      isVisible: card.isVisible(),
      value: card.value,
      suit: card.suit,
    }
  }

  mapHand(hand) {
    return {
      cards: hand.cards.map(card => this.mapCard(card)),
      points: hand.points,
    }
  }

  mapPlayer(player) {
    return {
      name: player.name ?? 'Dealer',
      hand: this.mapHand(player.hand),
    }
  }

  mapGame(game) {
    return {
      id: game.id,
      state: game.state,
      dealer: this.mapPlayer(game.dealer),
      player: this.mapPlayer(game.player),
    }
  }
}

export { Mappers }
