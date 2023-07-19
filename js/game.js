import { SNAKE_SPEED } from './snake/snake.js'
import { drawSnake } from './snake/drawSnake.js'
import { addFood, foodOnBoard } from './food.js'
import { moveSnake } from './snake/moveSnake.js'
import {
  checkEdgeCollision,
  checkFoodCollision,
  checkSnakeOnSnakeCollision,
} from './snake/collision.js'
import { eatFood } from './snake/eatFood.js'
import { changeDirection } from './snake/changeDirection.js'

let lastRenderTime = 0

const runGame = (currentTime) => {
  if (checkEdgeCollision()) return alert('You lose!')
  if (checkSnakeOnSnakeCollision()) return alert('You lose!')

  window.requestAnimationFrame(runGame)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  drawGame()
  updateGame()
}

window.requestAnimationFrame(runGame)

document.addEventListener('keydown', (event) => {
  changeDirection(event)
})

export const updateGame = () => {
  if (checkFoodCollision()) {
    eatFood()
    return
  }
  moveSnake()
}

export const drawGame = () => {
  const gameBoard = document.getElementById('game__board')

  drawSnake(gameBoard)
  if (!foodOnBoard) addFood(gameBoard)
}
