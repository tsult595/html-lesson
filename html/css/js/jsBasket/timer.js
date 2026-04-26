// let display = document.querySelector('#secund')
// let btn = document.querySelector('#btn')
// let div = document.querySelector('#div')

// let hour = 0
// let minute = 0
// let secunda = 0
// let time 
// let krugs = []  // массив для сохранения кругов

// // Функция для форматирования времени (00:00:05)
// function formatTime(h, m, s){
//   return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
// }

// function timer(){
//   if(btn.innerHTML == 'go'){
//     btn.innerHTML = 'stop'
//     time = setInterval(()=>{
//       secunda++
//       if(secunda == 60){
//         minute++
//         secunda = 0
//       }
//       if(minute == 60){
//         hour++
//         minute = 0
//       }
//       display.innerHTML = `<p>${formatTime(hour, minute, secunda)}</p>`
//     }, 1000)
//   }else if(btn.innerHTML == 'stop'){
//     btn.innerHTML = 'go'
//     clearInterval(time)
//   }
// }

// const reset = function(){
//   display.innerHTML = `<p>00:00:00</p>`
//   hour = 0
//   minute = 0
//   secunda = 0
//   krugs = []
//   div.innerHTML = ''
//   clearInterval(time)
//   btn.innerHTML = 'go'
// }

// // Функция для записи круга
// const krug = function(){
//   let currentTime = formatTime(hour, minute, secunda)
//   krugs.push(currentTime)
  
//   let br = `<div class="p-2 border-b">
//     <p class="text-red-200">Круг ${krugs.length}: ${currentTime}</p>
//   </div>`
//   div.innerHTML += br
// }
