
let res = document.querySelector('#result')
let inp1 = document.querySelector('#inp1')
let inp2 = document.querySelector('#inp2')
let more = document.querySelector("#more")
let yoxlainp = document.querySelector('#yoxla')
let yoxlaP = document.querySelector('#yoxlaP')



function fontChanger(style, value) {
  if (style === 'bold') {
    res.style.fontWeight = res.style.fontWeight === 'bold' ? '' : 'bold'
  } else if (style === 'italic') {
    res.style.fontStyle = res.style.fontStyle === 'italic' ? '' : 'italic'
  } else if (style === 'underline') {
    res.style.textDecoration = res.style.textDecoration === 'underline' ? '' : 'underline'
  } else if (style === 'color') {
    res.style.color = value.value
  }
}


function dahaCox(){
  let inpOne = inp1.value
  let inpTwo = inp2.value
  
  if(inpOne > inpTwo){
   more.innerHTML = `${inpOne} больше чем ${inpTwo}`
  }else{
    more.innerHTML = `${inpTwo} больше чем ${inpOne}`
  }
}

function yoxla(){
  let yoxlaValue = yoxlainp.value
  console.log(yoxlaValue);
  
  if(yoxlaValue > 0 && yoxlaValue % 2 == 0){
    yoxlaP.innerHTML = `${yoxlaValue} hem cut hem musbrt`
  }else{
    yoxlaP.innerHTML = `${yoxlaValue} deyil`
  }
}


let enBoyukP = document.querySelector('#enBoyukP')
let enBalacaP = document.querySelector('#enBalacaP')
let inpOne = document.querySelector('#one')
let inpTwo = document.querySelector('#two')
let inpThree = document.querySelector('#three')


function yoxlaTwo(){
    let  inpOneVal = Number(inpOne.value)
    let  inpTwoVal = Number(inpTwo.value)
    let  inpThreeVal = Number(inpThree.value) 
    let allVall = [inpOneVal , inpTwoVal , inpThreeVal]
    
    let whoMore = allVall.reduce((acc , e)=> acc < e? acc : e)  
    let whoLess = allVall.reduce((acc , e)=> acc > e? acc : e) 
   
    enBoyukP.innerHTML = `eto bolwe ${whoMore}`
    enBalacaP.innerHTML = `eto menwe ${whoLess}`
}


let adInp = document.querySelector('#adiInput')
let qiymetInput = document.querySelector('#qiymetInput')
let qiymetP = document.querySelector('#qiymetP')

function yoxlaQiymet(){
  let qiymetInputValue = qiymetInput.value
  let adInpValue = adInp.value 
  if(qiymetInputValue > 0 && qiymetInputValue < 20){
    qiymetInputValue = "Net"
   qiymetP.innerHTML = `hormetli ${adInpValue}  senin qiymetin ${qiymetInputValue}`
  }else if(qiymetInputValue > 20 && qiymetInputValue < 60){
   qiymetInputValue = "A XZ"
   qiymetP.innerHTML = `hormetli ${adInpValue}  senin qiymetin ${qiymetInputValue}`
  }else if(qiymetInputValue > 60 && qiymetInputValue <= 100){
   qiymetInputValue = "Good"
   qiymetP.innerHTML = `hormetli ${adInpValue}  senin qiymetin ${qiymetInputValue}`
  }
}
 
let num1 = 5 
let num2 = 5 

let sumo = num1  + num2
console.log(sumo +2);

let testP = document.querySelector('#testP')
let textinp = document.querySelector('#textinp')

function showText(){
  let textinpVal = textinp.value
  testP.innerHTML = textinpVal
}



