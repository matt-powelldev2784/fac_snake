export const SNAKE_SPEED = 4
export let moveDirection = 'down'
export let hasMoved = true

export const snakeBody = [
  { x: 10, y: 8 },
  { x: 9, y: 8 },
  { x: 8, y: 8 },
]

export const setMoveDirection = (direction) => {
  moveDirection = direction
}

export const setHasMoved = (bollean) => {
  hasMoved = bollean
}
