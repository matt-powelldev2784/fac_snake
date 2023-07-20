export let SNAKE_SPEED = 2
export let moveDirection = 'down'
export let hasMoved = true

export const snakeBody = [
  { x: 10, y: 8 },
  { x: 9, y: 8 },
  { x: 8, y: 8 },
  { x: 7, y: 8 },
  { x: 6, y: 8 },
  { x: 5, y: 8 },
  { x: 4, y: 8 },
]

export const setMoveDirection = (direction) => {
  moveDirection = direction
}

export const setHasMoved = (bollean) => {
  hasMoved = bollean
}

export const increaseGameSpeed = () => {
  SNAKE_SPEED += 0.6
}
