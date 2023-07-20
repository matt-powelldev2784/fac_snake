import { runGame } from '../main.js'
import { removeStartGameListeners } from '../eventListeners/eventListeners.js'

export const startGame = () => {
  const startGameElement = document.getElementById('game__start-game-text')
  startGameElement.style.display = 'none'

  setTimeout(() => {
    window.requestAnimationFrame(runGame)
  }, 500)

  removeStartGameListeners()
}
