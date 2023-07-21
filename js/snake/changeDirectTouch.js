import {
  hasMoved,
  setHasMoved,
  setMoveDirection,
  moveDirection,
} from './snake.js'

let touchstartX = 0
let touchstartY = 0
let touchendX = 0
let touchendY = 0

export const addTouchDetectionEventListeners = () => {
  document.addEventListener(
    'touchstart',
    (event) => {
      touchstartX = event.changedTouches[0].screenX
      touchstartY = event.changedTouches[0].screenY
    },
    false
  )

  document.addEventListener(
    'touchend',
    (event) => {
      touchendX = event.changedTouches[0].screenX
      touchendY = event.changedTouches[0].screenY
      handleTouch()
    },
    false
  )

  const handleTouch = () => {
    if (!hasMoved) return
    const threshold = 70

    if (moveDirection !== 'down' && touchendY < touchstartY - threshold) {
      setMoveDirection('up')
      setHasMoved(false)
      return
    }

    if (moveDirection !== 'up' && touchendY > touchstartY + threshold) {
      setMoveDirection('down')
      setHasMoved(false)
      return
    }

    if (moveDirection !== 'right' && touchendX < touchstartX - threshold) {
      setMoveDirection('left')
      setHasMoved(false)
      return
    }

    if (moveDirection !== 'left' && touchendX > touchstartX + threshold) {
      setMoveDirection('right')
      setHasMoved(false)
      return
    }

    // if (touchendY === touchstartY) {
    //   if (tapFunction) {
    //     setTimeout(() => {
    //       tapFunction()
    //     }, 300)
    //   }
    // }
  }
}
