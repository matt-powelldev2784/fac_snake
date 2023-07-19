import {
  SNAKE_SPEED,
  updateSnake,
  drawSnake,
  checkEdgeCollision,
  checkFoodCollision,
} from './snake.js'
import { addFood, foodOnBoard, setFoodOnBoard } from './food.js'

let lastRenderTime = 0

const runGame = (currentTime) => {
  if (checkEdgeCollision()) return alert('You lose!')

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
  if (checkFoodCollision()) {
    document.querySelector('.food').remove()
    setFoodOnBoard(false)
  }
  updateSnake()
}

export const drawGame = () => {
  const gameBoard = document.getElementById('game__board')

  drawSnake(gameBoard)
  if (!foodOnBoard) addFood(gameBoard)
}
