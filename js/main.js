import { SNAKE_SPEED } from './snake/snake.js'
import { drawSnake } from './snake/drawSnake.js'
import { addFood, foodOnBoard } from './food/food.js'
import { moveSnake } from './snake/moveSnake.js'
import {
  checkEdgeCollision,
  checkFoodCollision,
  checkSnakeOnSnakeCollision,
} from './snake/collision.js'
import { eatFood } from './snake/eatFood.js'
import { changeDirection } from './snake/changeDirection.js'
import { startGame } from './game/startGame.js'

let lastRenderTime = 0

const screenElement = document.getElementById('game__board')
screenElement.addEventListener('click', () => {
  startGame()
})
const startGameElement = document.getElementById('game__start-game-text')
startGameElement.addEventListener('click', () => {
  startGame()
})

export const runGame = (currentTime) => {
  if (checkEdgeCollision() || checkSnakeOnSnakeCollision()) {
    handleGameOver()
    return
  }

  window.requestAnimationFrame(runGame)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  drawGame()
  updateGame()
}

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

const handleGameOver = () => {
  document.querySelectorAll('.snake').forEach((snakeElement) => {
    snakeElement.remove()
  })
  const food = document.getElementById('food')
  if (food) food.remove()

  const gameOverElement = document.getElementById('game__game-over-text')
  gameOverElement.style.display = 'block'

  const screenElement = document.getElementById('game__board')
  screenElement.addEventListener('click', () => {
    window.location.reload()
  })

  gameOverElement.addEventListener('click', () => {
    window.location.reload()
  })
}
