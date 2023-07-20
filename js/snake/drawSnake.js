import { snakeBody } from './snake.js'

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
