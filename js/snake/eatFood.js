import { setFoodOnBoard } from '../food.js'
import { moveDirection, snakeBody } from './snake.js'

export const eatFood = () => {
  document.querySelector('.food').remove()
  setFoodOnBoard(false)
  addLengthToSnake()
}

const addLengthToSnake = () => {
  switch (moveDirection) {
    case 'up':
      snakeBody.unshift({ x: snakeBody[0].x, y: snakeBody[0].y - 1 })
      break
    case 'down':
      snakeBody.unshift({ x: snakeBody[0].x, y: snakeBody[0].y + 1 })
      break
    case 'left':
      snakeBody.unshift({ x: snakeBody[0].x - 1, y: snakeBody[0].y })
      break
    case 'right':
      snakeBody.unshift({ x: snakeBody[0].x + 1, y: snakeBody[0].y })
      break
  }
}
