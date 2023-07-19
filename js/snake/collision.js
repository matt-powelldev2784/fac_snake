import { snakeBody } from './snake.js'
import { foodPosition } from '../food.js'

export const checkEdgeCollision = () => {
  const xCollision = snakeBody[0].x < 0 || snakeBody[0].x > 22 ? true : false
  const yCollision = snakeBody[0].y < 0 || snakeBody[0].y > 22 ? true : false
  return xCollision || yCollision
}

export const checkFoodCollision = () => {
  const foodCollison =
    snakeBody[0].x === foodPosition.x && snakeBody[0].y === foodPosition.y
      ? true
      : false
  return foodCollison
}
