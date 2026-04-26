
let input = document.getElementById('inp');
let show = document.querySelector('#show')
let div = document.querySelector('#div')
let loginInp =document.querySelector('#loginInp')
let welcomeLogin = document.querySelector('#welcomeLogin')
let darkornot = document.querySelector('#darkornot')

const see = function(){
    if(!localStorage.getItem('todo')){
    localStorage.setItem('todo', input.value)
    }else{
        localStorage.setItem('todo', localStorage.getItem('todo') + ","  + input.value)
    }
    show.innerHTML += `<p>${input.value}</p>`
}

const login = function(){
    if(localStorage.getItem('login')) return; 
    if(loginInp.value.trim() === '') return;  
    
    localStorage.setItem('login', loginInp.value)
    welcomeLogin.innerHTML = `<p>welcome Mr ${loginInp.value}</p>`
    loginInp.value = '';
}

if(localStorage.getItem('login')){
    welcomeLogin.innerHTML = `<p>welcome Mr ${localStorage.getItem('login')}</p>`
}


const logout = function(){
    localStorage.removeItem('login')
     welcomeLogin.innerHTML = `<p>Welcome Mr</p>`
    loginInp.value = '';
}





const toDark = function(){
    if(darkornot.innerHTML == 'to-dark'){
     localStorage.setItem('dark' , 'black') 
     darkornot.innerHTML = 'to-light'
     div.className = 'black'
    }else if(darkornot.innerHTML == 'to-light'){
      localStorage.setItem('dark' , 'white') 
      darkornot.innerHTML = 'to-dark'
      div.className = 'white'
    }

 
}

if(localStorage.getItem('dark')){
    const theme = localStorage.getItem('dark')
    div.className = theme
    darkornot.innerHTML = theme === 'black' ? 'to-light' : 'to-dark'
}

 let ac = "errno=100&errtext=OK&message_id=1477019280&charge=1&balance=9809"
        // console.log(ac.split("&"))

        // for (let i = 0; i < ac.split("&").length; i++) {
        //     const key = ac.split("&")[i].split("=")
        //     console.log(key[0])
        //     const value = ac.split("&")[i].split("=")[1]
        //     console.log(`${key}: ${value}`)

        // }



let arr = ac.split("&")

let obj = {}

for(let i = 0; i < arr.length; i++){
  let pair = arr[i].split("=")

  let key = pair[0]
  let value = pair[1]

  obj[key] = value
}

console.log(obj)


let strocka = "  name=John   & age=25 & city=London  "

const goUntill = function(t){
  let obj = {}

  let trimmed = t.trim()                 // очистили края
  let arr = trimmed.split("&")           // разбили по &
  let cleanArr = arr.map(item => item.trim()) // очистили каждый элемент

  for(let i = 0; i < cleanArr.length; i++){
    let pair = cleanArr[i].split("=")   // разделили key/value

    let key = pair[0]
    let value = pair[1]

    obj[key] = value                   // добавили в объект
  }

  return obj
}

console.log(goUntill(strocka))

