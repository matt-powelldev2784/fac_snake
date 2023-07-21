import { runGame } from '../main.js'
import { removeStartGameListeners } from '../eventListeners/eventListeners.js'
import { addTouchDetectionEventListeners } from '../snake/changeDirectTouch.js'

export const startGame = () => {
  addTouchDetectionEventListeners()

  const startGameElement = document.getElementById('game__start-game-text')
  startGameElement.style.display = 'none'

  setTimeout(() => {
    window.requestAnimationFrame(runGame)
  }, 500)

  removeStartGameListeners()
}
