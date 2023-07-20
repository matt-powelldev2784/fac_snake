import { startGame } from '../game/startGame.js'
import { changeDirection } from '../snake/changeDirection.js'

export const startEventListeners = () => {
  const screenElement = document.getElementById('game__board')
  screenElement.addEventListener('click', () => {
    startGame()
  })
  const startGameElement = document.getElementById('game__start-game-text')
  startGameElement.addEventListener('click', () => {
    startGame()
  })

  document.addEventListener('keydown', (event) => {
    changeDirection(event)
  })
}
