class RandomShuffler {
  shuffle(cards) {
    for (let index = cards.length - 1; index > 0; index--) {
      const subIndex = Math.floor(Math.random() * (index + 1));
      [cards[index], cards[subIndex]] = [cards[subIndex], cards[index]];
    }

    return cards
  }
}

export { RandomShuffler }
