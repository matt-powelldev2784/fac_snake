import { foodPosition } from './food.js'

export const SNAKE_SPEED = 1
let moveDirection = 'down'

const snakeBody = [
  { x: 10, y: 8 },
  { x: 9, y: 8 },
  { x: 8, y: 8 },
]

export const updateSnake = () => {
  moveSnake()
}

export const drawSnake = (gameBoard) => {
  document.querySelectorAll('.snake').forEach((snakeElement) => {
    snakeElement.remove()
  })
  for (const segment of snakeBody) {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.style.gridRowStart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  }
}

const moveSnake = () => {
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
}

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
