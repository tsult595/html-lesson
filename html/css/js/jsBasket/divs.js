
let wrapper = document.querySelector('#wrapper')


const changeColor = function(i){
  let div = document.getElementById(i)
  div.classList.toggle('bg-blue-500')
}
  

const init = ()=>{
    for(let i = 0; i < 10; i++){
    wrapper.innerHTML += `<div  onclick="changeColor(${i})" id="${i}" class="w-64 h-64 bg-red-400">
    <h1>Div ${i}</h1> 
    </div>`
     }
}

init()