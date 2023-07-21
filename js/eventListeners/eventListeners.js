import { startGame } from '../game/startGame.js'
import { changeDirection } from '../snake/changeDirectionKeys.js'

const handleStartGame = () => {
  startGame()
}

const handleEnterKeydown = (event) => {
  if (event.key == 'Enter') {
    startGame()
  }
}

export const addStartGameListeners = () => {
  const screenElement = document.getElementById('game__board')
  screenElement.addEventListener('click', handleStartGame)

  const startGameElement = document.getElementById('game__start-game-text')
  startGameElement.addEventListener('click', handleStartGame)

  document.addEventListener('keydown', handleEnterKeydown)

  document.addEventListener('keydown', changeDirection)
}

export const removeStartGameListeners = () => {
  const screenElement = document.getElementById('game__board')
  screenElement.removeEventListener('click', handleStartGame)

  const startGameElement = document.getElementById('game__start-game-text')
  startGameElement.removeEventListener('click', handleStartGame)

  document.removeEventListener('keydown', handleEnterKeydown)
}

export const addGameOverListeners = () => {
  const screenElement = document.getElementById('game__board')
  screenElement.addEventListener('click', () => {
    window.location.reload()
  })

  const gameOverElement = document.getElementById('game__game-over-text')
  gameOverElement.addEventListener('click', () => {
    window.location.reload()
  })

  document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
      window.location.reload()
    }
  })
}

const playSound = () => {
  const audio = new Audio('../assets/nokia_hello.mp3')
  audio.play()
}

export const addSoundListeners = () => {
  const titleElement = document.getElementById('game__title')
  titleElement.addEventListener('click', playSound)
}
