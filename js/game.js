import {
  SNAKE_SPEED,
  updateSnake,
  drawSnake,
  checkSnakeCollision,
} from './snake.js'
import { addFood } from './food.js'

let lastRenderTime = 0

const runGame = (currentTime) => {
  if (checkSnakeCollision()) return alert('You lose!')

  window.requestAnimationFrame(runGame)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  console.log('secondsSinceLastRender', secondsSinceLastRender)

  drawGame()
  updateGame()
}

window.requestAnimationFrame(runGame)

export const updateGame = () => {
  updateSnake()
}

export const drawGame = () => {
  const gameBoard = document.getElementById('game__board')

  drawSnake(gameBoard)
}

const gameBoard = document.getElementById('game__board')
addFood(gameBoard)
