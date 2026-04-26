
let cross = document.querySelector('#cross')

let kod = ''
let flag = true
let board = []
let index = 0


for(let i = 0; i< 3 ; i++){
  kod += `<tr>` 
  for(let j = 0 ; j < 3 ; j++){
    kod += `<td onclick="crossFunc(this)" class="border border-black p-4 w-12 text-center" data-index="${index}" data-i="${i}" data-j="${j}"></td>`
    board[index] = ''
    index++
  }
  kod += `</tr>` 
}

cross.innerHTML = kod


const crossFunc = function(thisCell){
  let cellIndex = thisCell.dataset.index
  let i = thisCell.dataset.i
  let j = thisCell.dataset.j
  console.log(`Координаты: ${i},${j}`)
  
  if(board[cellIndex] === ''){
    if(flag){
      board[cellIndex] = 'X'
      thisCell.textContent = 'X'
    }else{
      board[cellIndex] = 'O'
      thisCell.textContent = 'O'
    }
    flag = !flag
  }
}

let option = document.querySelector('#option')
let what = document.querySelector('#what')

// Добавляем опции один раз
for(let i = 1; i < 10; i++) {
  option.innerHTML += `<option value="${i}">${i}</option>` 
}

const hesabla = function(){
    let optVal = +option.value 
    for(let i = 0; i< 10; i++){
     what.innerHTML += `<p>${i}*${optVal}=${i * optVal}</p>`

    }
}

let run = document.querySelector('#run')
let wrapper = document.querySelector('#wrapper')

function runs(){
 let y = window.innerHeight
 let x = window.innerWidth
 let xVal = Math.floor(Math.random()* x)
 let yVal = Math.floor(Math.random()* y)
 run.style.left = `${xVal}px`
 run.style.top = `${yVal}px`

}






