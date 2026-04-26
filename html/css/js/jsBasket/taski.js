
let names = document.querySelector('#names')
let nameInp = document.querySelector('#nameInp')
let whoIs = document.querySelector('#whoIs')


const see = function(){
    let inpVal = nameInp.value
    for(let i = 0; i < inpVal.length; i++){
      
      names.innerHTML += `
        <p class="text-black">${inpVal[i].toUpperCase() + inpVal.slice(i + 1)}</p>
      `
    }
    whoIs.innerHTML += `
      <p class="text-black">${inpVal}</p>
    `
    nameInp.value = ''
    }


let passInp = document.querySelector('#passInp')    
let whoIsPass = document.querySelector('#whoIsPass')


const seePass = function(){
  let passInpVal = Number(passInp.value)
  for(let i = 0 ; i < passInpVal; i++){
    let num = Math.floor(Math.random() * passInpVal)
    whoIsPass.innerHTML += `
      <p class="text-black">${num}</p>
    `
  }
 
}

let back = document.querySelector('#back')
let showback = document.querySelector('#showback')


const showsBack = function() {
  // Очищаем предыдущий результат
  showback.innerHTML = '';

  let num = Number(back.value);

  // Проверка: если ввели не число или число меньше 1
  // if (isNaN(num) || num <= 0) {
  //   showback.innerHTML = '<p>Введите число больше 0</p>';
  //   return;
  // }

  // Выводим от num-1 вниз до 1
  for (let i = num - 1; i >= 1; i-=2) {
    showback.innerHTML += `<p>${i}</p>`;
  }
};


let hund = document.querySelector('#hund')
let showhund = document.querySelector('#showhund')


const showHundFunc = function(){
  let hundVal = Number(hund.value)
  let limit = 100
  for(let i = 1 ; i <= limit ; i+=hundVal){
    showhund.innerHTML += `
    <p>${i}</p>
    `
  }
  hund.value = ''
} 

let ten = document.querySelector('#ten')
let showTen = document.querySelector('#showten')
console.log(showTen);


const showTenFunc = function(){
  let tenVal = Number(ten.value)
  let limit = 10
  for(let i = 1; i <= limit ; i+= tenVal){
    showTen.innerHTML += `
    <p>${i}</p>
    `
  }

}

let zurInp = document.querySelector('#zurInp')
let showZur = document.querySelector('#showzur')

const showsZur = function(){
  let zurInpVal = zurInp.value
  for(let i = zurInpVal ; i > 1; i-=2){
    showZur.innerHTML += `
    <p>${i}</p>
    `
  }
}

let vahid = document.querySelector('#vahid');
let showVahid = document.querySelector('#showvahid');
let showvahid2 = document.querySelector('#showvahid2');




  const seeVahid = () => {
  let vahidVal = vahid.value;
  let result = '';

  for(let i = 0; i < vahidVal.length; i++){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    result += `<span style="color: rgb(${r},${g},${b})">${vahidVal[i]}</span>`;
  }
 
  showvahid2.innerHTML = result;
  showVahid.innerHTML = `<p>${vahidVal}</p>`;
  vahid.value = '';
};






