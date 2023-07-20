import { foodImageList } from './foodImageList.js'

export const loadfoodImages = () => {
  foodImageList.forEach((foodImage) => {
    const image = document.createElement('img')
    image.src = `./assets/food/${foodImage}`
  })
}
