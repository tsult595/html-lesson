
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let img = document.querySelector('#img')
let counter = document.querySelector('#counter')

let images = ['../1.svg' , '../2.svg' ,'../3.svg' , '../4.svg' , '../5.svg', '../6.svg' , '../7.svg' , '../8.svg']
let currentIndex = 0

const slider = function(){
  img.innerHTML = `<img class="w-full h-full object-cover" src="${images[currentIndex]}" alt="">`
  counter.innerHTML = `${currentIndex + 1}/${images.length}`
}

const leftClick = function(){
  // Если в начале, идем в конец
  if(currentIndex === 0){
    currentIndex = images.length - 1
  } else {
    currentIndex--
  }
  slider()
}

const rightClick = function(){
  // Если в конце, идем в начало
  if(currentIndex === images.length - 1){
    currentIndex = 0
  } else {
    currentIndex++
  }
  slider()
}

slider()  // Показать первое изображение при загрузке

// setInterval(rightClick, 3000)

