import { runGame } from '../game.js'

export const startGame = () => {
  const startGameElement = document.getElementById('game__start-game-text')
  startGameElement.style.display = 'none'

  const screenElement = document.getElementById('game__board')

  setTimeout(() => {
    window.requestAnimationFrame(runGame)
  }, 500)

  screenElement.removeEventListener('click', () => {
    startGame()
  })
  startGameElement.removeEventListener('click', () => {
    startGame()
  })
}
