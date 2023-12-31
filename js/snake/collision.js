import { snakeBody } from './snake.js'
import { foodPosition } from '../food/food.js'

//css grid is 30 x 21 cells
export const checkEdgeCollision = () => {
  const xCollision = snakeBody[0].x < 0 || snakeBody[0].x > 30 ? true : false
  const yCollision = snakeBody[0].y < 0 || snakeBody[0].y > 21 ? true : false
  return xCollision || yCollision
}

export const checkFoodCollision = () => {
  const foodCollison =
    snakeBody[0].x === foodPosition.x && snakeBody[0].y === foodPosition.y
      ? true
      : false
  return foodCollison
}

export const checkSnakeOnSnakeCollision = () => {
  const snakeOnSnakeCollision = snakeBody.some((segment, index) => {
    if (index === 0) return false
    return segment.x === snakeBody[0].x && segment.y === snakeBody[0].y
  })
  return snakeOnSnakeCollision
}
