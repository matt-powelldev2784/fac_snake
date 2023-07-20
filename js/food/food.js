import { foodImageList } from './foodImageList.js'

export let foodOnBoard = false
export let foodPosition = null

export const setFoodOnBoard = (value) => {
  foodOnBoard = value
}

let nextFoodImage = 0

const getNextFoodImage = () => {
  const nextImage = foodImageList[nextFoodImage]
  nextFoodImage++
  if (nextFoodImage >= foodImageList.length) nextFoodImage = 0
  return nextImage
}

export const addFood = (gameBoard) => {
  const randomCoordinates = getRandomBoardPosition()
  foodPosition = randomCoordinates
  const foodElement = document.createElement('div')
  const image = document.createElement('img')
  const nextFoodImage = getNextFoodImage()
  console.log('nextFoodImage', nextFoodImage)
  image.src = `./assets/food/${nextFoodImage}`
  foodElement.appendChild(image)

  foodElement.style.gridColumnStart = randomCoordinates.x
  foodElement.style.gridRowStart = randomCoordinates.y
  foodElement.classList.add('food')
  foodElement.id = 'food'
  gameBoard.appendChild(foodElement)
  foodOnBoard = true
}

const getRandomBoardPosition = () => {
  return {
    x: Math.floor(Math.random() * 21) + 1,
    y: Math.floor(Math.random() * 21) + 1,
  }
}
