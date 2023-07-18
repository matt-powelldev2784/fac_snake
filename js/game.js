let lastRenderTime = 0
const SNAKE_SPEED = 1

const runGame = (currentTime) => {
  window.requestAnimationFrame(runGame)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  updateGame()
  drawGame()
}

window.requestAnimationFrame(runGame)

const updateGame = () => {}

const drawGame = () => {}
