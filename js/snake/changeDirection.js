import { hasMoved, setHasMoved } from './snake.js'

export const changeDirection = (event) => {
  if (!hasMoved) return
  if (event.key === 'ArrowUp' && moveDirection !== 'down') {
    moveDirection = 'up'
    setHasMoved(false)
    return
  }
  if (event.key === 'ArrowDown' && moveDirection !== 'up') {
    moveDirection = 'down'
    setHasMoved(false)
    return
  }

  if (event.key === 'ArrowLeft' && moveDirection !== 'right') {
    moveDirection = 'left'
    setHasMoved(false)
    return
  }

  if (event.key === 'ArrowRight' && moveDirection !== 'left') {
    moveDirection = 'right'
    setHasMoved(false)
    return
  }
}
