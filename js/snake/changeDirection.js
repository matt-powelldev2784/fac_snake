import {
  hasMoved,
  setHasMoved,
  setMoveDirection,
  moveDirection,
} from './snake.js'

export const changeDirection = (event) => {
  if (!hasMoved) return
  if (event.key === 'ArrowUp' && moveDirection !== 'down') {
    setMoveDirection('up')
    setHasMoved(false)
    return
  }
  if (event.key === 'ArrowDown' && moveDirection !== 'up') {
    setMoveDirection('down')
    setHasMoved(false)
    return
  }

  if (event.key === 'ArrowLeft' && moveDirection !== 'right') {
    setMoveDirection('left')
    setHasMoved(false)
    return
  }

  if (event.key === 'ArrowRight' && moveDirection !== 'left') {
    setMoveDirection('right')
    setHasMoved(false)
    return
  }
}
