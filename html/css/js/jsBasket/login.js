

let nameinp = document.querySelector('#nameinp')
let surNameinp = document.querySelector('#surNameinp')
let welcome = document.querySelector('#welcome')

const login = function(){
  const fullName = `${surNameinp.value},${nameinp.value}`
  localStorage.setItem('login2', fullName)
  welcome.innerHTML = `<p class="welcome">Welcome ${fullName}</p>`
  nameinp.value = '';
  surNameinp.value = '';
     
}

if(localStorage.getItem('login2')){
  welcome.innerHTML = `<p class="welcome">Welcome ${localStorage.getItem('login2')}</p>`
}