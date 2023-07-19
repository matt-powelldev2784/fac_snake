export const addFood = (gameBoard) => {
  console.log('getRandomBoardPosition', getRandomBoardPosition)
  const foodElement = document.createElement('div')
  // snakeElement.style.gridColumnStart = segment.x
  // snakeElement.style.gridRowStart = segment.y
  // snakeElement.classList.add('snake')
  // gameBoard.appendChild(foodElement)
}

const getRandomBoardPosition = () => {
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
  }
}
