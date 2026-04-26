
let vahidInp = document.querySelector('#vahidInp')
let showVahid = document.querySelector('#showVahid')
let showVahid2 = document.querySelector('#showVahid2')

const seeVahid = function(){
  let vahidVal = vahidInp.value 
  let result = ''

  for(let i = 0; i < vahidVal.length; i++){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    result += `<span style="color: rgb(${r},${g},${b})">${vahidVal[i]}</span>`
  }
  for(let i = 0; i < vahidVal.length; i++){ 
   let word = ''
   for(let j = 0; j < vahidVal.length; j++){
        if(j === vahidVal.length - 1){
        word += vahidVal[j].toUpperCase()
        }else{
        word += vahidVal[j].toLowerCase()
        }

   }  
   showVahid2.innerHTML += `<p>${word}</p>`
}

  
  showVahid.innerHTML = `<p>${result}</p>`
  vahidInp.value = ''
}


// let arr = [1, 2, 3, 4, 5, -6, 7, 8, -9, 10]
// let howMany = 0
// let sum = ''
// let sumos = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//     howMany++
//     sum += arr[i]
//     sumos.push(arr[i])
    
//     }
// }

// console.log(sum);
// console.log(sumos);
// console.log(howMany);

let arro = [1, 2, 3, 4, 5, -6, 7, 8, -9, 10]

let sum = 0
let summ = []
let total = 0
for(let i=0;i<arro.length;i++){
    if(arro[i] > 5){
     sum++
     summ.push(arro[i])
     total += arro[i]
    }
}
console.log(sum);
console.log(summ);
console.log(total);



let words = ['hello', 'world', 'javascript']
let wordsData = []
let wordCount = 0
let totalLength = 0


for(let i=0;i<words.length;i++){
   wordCount++
   totalLength += words[i].length
   wordsData.push({word: words[i], length: words[i].length})
}

console.log(wordCount);
console.log(totalLength);
console.log(wordsData);


let expensive = []
let cheap = []
let totals = 0
let products = [100, 50, 200, 30, 150, 20]

for(let i =0; i<products.length; i++){
   if(products[i] <= 75){
    expensive.push(products[i])
   }else {
    cheap.push(products[i])
  }
  
}

console.log(expensive);
console.log(cheap);


let orders = [120, 50, 300, 80, 20, 500, 60]

let totales = 0
let expensives = []
let cheaps = []
let expensiveCount = 0
let cheapCount = 0
let max = orders[0]
let min = orders[0]

for(let i = 0; i < orders.length; i++){
    totales += orders[i]
    if(orders[i]> 100){
        expensives.push(orders[i])
        expensiveCount++
    }else{
        cheaps.push(orders[i])
        cheapCount++
        
    }
}

console.log(expensives);
console.log(cheaps);
console.log(expensiveCount);
console.log(cheapCount);
console.log(totales);




let teymur = 'teymur' 

for(let i = teymur.length - 1; i >= 0; i--){
  console.log(teymur[i]) 
}


let display = document.querySelector('#secund')
let btn = document.querySelector('#btn')
let div = document.querySelector('#div')
console.log(display);


let hour = 0
let minute = 0
let secunda = 0
let time 
let krugs = []

function formatTime(h, m, s){
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function timer(){
  if(btn.innerHTML == 'go'){
    btn.innerHTML = 'stop'
    time = setInterval(()=>{
      secunda++
      if(secunda == 60){
          minute++
          secunda = 0
      }if(minute == 60){
        hour++
        minute = 0
      }
     display.innerHTML = `<p>${formatTime(hour, minute, secunda)}</p>`
    }, 1000)
  }else if(btn.innerHTML == 'stop'){
    btn.innerHTML = 'go'
    clearInterval(time)
  }
  
}

const reset = function(){
  display.innerHTML = `<p>00:00:00</p>`
  hour = 0
  minute = 0
  secunda = 0
  krugs = []
  div.innerHTML = ''
  clearInterval(time)
  btn.innerHTML = 'go'
}

const krug = function(){
  let currentTime = formatTime(hour, minute, secunda)
  krugs.push(currentTime)
  
  let br = `<div class="p-2 border-b">
    <p class="text-red-200">Круг ${krugs.length}: ${currentTime}</p>
  </div>`
  div.innerHTML += br
}







