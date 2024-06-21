import {jest} from '@jest/globals'
import { Coordinator } from "./coordinator"

describe('Coordinator', () => {
  const cardsMock = {
    update: jest.fn()
  }
  const scoreMock = {
    update: jest.fn()
  }
  const stateMock = {
    update: jest.fn()
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('start', () => {
    it('should call the API to start the game', async () => {
      const httpClientMock = {
        post: jest.fn()
      }
      const coordinator = coordinatorFactory(httpClientMock, cardsMock, scoreMock, stateMock)

      await coordinator.start()

      expect(httpClientMock.post).toHaveBeenCalledTimes(1)
      expect(httpClientMock.post).toHaveBeenCalledWith('/start')
    })

    it('should update the states', async () => {
      const httpClientStub = {
        post: jest.fn()
      }
      const game = { id: 'fake-game-object' }
      httpClientStub.post.mockReturnValue(game)
      const coordinator = coordinatorFactory(httpClientStub, cardsMock, scoreMock, stateMock)

      await coordinator.start()

      expect(cardsMock.update).toHaveBeenCalledTimes(1)
      expect(cardsMock.update).toHaveBeenCalledWith(game)
      expect(scoreMock.update).toHaveBeenCalledTimes(1)
      expect(scoreMock.update).toHaveBeenCalledWith(game)
      expect(stateMock.update).toHaveBeenCalledTimes(1)
      expect(stateMock.update).toHaveBeenCalledWith(game)
    })
  })

  describe('update', () => {
    it('should update all game states', async () => {
      const httpClientStub = {
        post: jest.fn()
      }
      const game = { id: 'fake-game-object' }
      httpClientStub.post.mockReturnValue(game)
      const coordinator = coordinatorFactory(httpClientStub, cardsMock, scoreMock, stateMock)

      await coordinator.start()

      expect(cardsMock.update).toHaveBeenCalledTimes(1)
      expect(cardsMock.update).toHaveBeenCalledWith(game)
      expect(scoreMock.update).toHaveBeenCalledTimes(1)
      expect(scoreMock.update).toHaveBeenCalledWith(game)
      expect(stateMock.update).toHaveBeenCalledTimes(1)
      expect(stateMock.update).toHaveBeenCalledWith(game)
    })
  })
})

function coordinatorFactory(httpClient, cards, score, state) {
  const coordinator = new Coordinator(httpClient)
  coordinator.cards = cards
  coordinator.score = score
  coordinator.state = state

  return coordinator
}
