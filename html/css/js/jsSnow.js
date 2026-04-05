let snowFlakeContainer = document.getElementById('snowFlakeContainer');
let ul = document.querySelector('#ul')
let inp = document.querySelector('#inp')
let del = document.querySelector('#del')
let li = document.querySelector('#li')
let rund = document.querySelector('#run')
let span = document.querySelector('#span')


function plural() {
for (let i = 0; i < 60; i++) {
let snow = document.createElement('div');
snow.className = 'w-5 h-5 bg-white animate-fall';
snow.style.clipPath = 'polygon(50% 0%, 74% 27%, 98% 35%, 79% 59%, 79% 91%, 50% 75%, 21% 91%, 23% 60%, 2% 35%, 31% 25%)';
snow.style.setProperty('--start-left', Math.random() * window.innerWidth + 'px');
snow.style.animationDuration = (Math.random() * 11 + 5) + 's';
snow.style.opacity = Math.random();
snowFlakeContainer.appendChild(snow);

  }
}

plural();

const deletetion = function(){
  li.document.querySelector.delete('#li')
}


const isDone = function(){
 li.style.color = "red"

}

console.log(window.innerHeight);
console.log(window.innerWidth);




function runs(){
 let widt = Math.floor(Math.random() *1536)
let hei = Math.floor(Math.random() *730)     
  rund.style.top = widt + 'px'
  rund.style.left = hei  + 'px'
}

function todo(){
  ul.innerHTML += `
    <li id="li"class="flex items-center justify-between bg-gray-200 p-4 rounded-2xl">
            <span id="span">${inp.value}</span>
            <button id="del" onclick="this.parentElement.remove()" class="text-red-500 hover:text-red-700">Delete</button>
             <button onclick="isDone(this)" class="text-red-500 hover:text-red-700">done</button>
        </li>
   ` 
   inp.value = ''
}





