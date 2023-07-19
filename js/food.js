export let foodOnBoard = false

export const addFood = (gameBoard) => {
  const randomCoordinates = getRandomBoardPosition()
  const foodElement = document.createElement('div')

  foodElement.style.gridColumnStart = randomCoordinates.x
  foodElement.style.gridRowStart = randomCoordinates.y
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
  foodOnBoard = true
}

const getRandomBoardPosition = () => {
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
  }
}
