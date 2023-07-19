export let foodOnBoard = false
export let foodPosition = null

export const setFoodOnBoard = (value) => {
  foodOnBoard = value
}

export const addFood = (gameBoard) => {
  const randomCoordinates = getRandomBoardPosition()
  foodPosition = randomCoordinates
  const foodElement = document.createElement('div')

  foodElement.style.gridColumnStart = randomCoordinates.x
  foodElement.style.gridRowStart = randomCoordinates.y
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
  foodOnBoard = true
}

const getRandomBoardPosition = () => {
  // return {
  //   x: Math.floor(Math.random() * 21) + 1,
  //   y: Math.floor(Math.random() * 21) + 1,
  // }
  return {
    x: 10,
    y: 10,
  }
}
