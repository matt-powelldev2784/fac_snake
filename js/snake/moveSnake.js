import { snakeBody, setHasMoved, moveDirection } from './snake.js'

export const moveSnake = () => {
  switch (moveDirection) {
    case 'up':
      snakeBody.unshift({ x: snakeBody[0].x, y: snakeBody[0].y - 1 })
      snakeBody.pop(snakeBody[snakeBody.length - 1])
      break
    case 'down':
      snakeBody.unshift({ x: snakeBody[0].x, y: snakeBody[0].y + 1 })
      snakeBody.pop(snakeBody[snakeBody.length - 1])
      break
    case 'left':
      snakeBody.unshift({ x: snakeBody[0].x - 1, y: snakeBody[0].y })
      snakeBody.pop(snakeBody[snakeBody.length - 1])
      break
    case 'right':
      snakeBody.unshift({ x: snakeBody[0].x + 1, y: snakeBody[0].y })
      snakeBody.pop(snakeBody[snakeBody.length - 1])
      break
  }
  setHasMoved(true)
}
