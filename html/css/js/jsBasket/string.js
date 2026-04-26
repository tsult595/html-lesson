
let text = document.querySelector('#text')

let t = text.textContent.split(' ')
console.log(t);

let defis = text.textContent.replaceAll(' ', '-' )
console.log(defis);


const makeUpperCase = function(t){
 let o = t.textContent.slice(0,2).toUpperCase() + t.textContent.slice(2)
  return o
 
}
console.log(makeUpperCase(text));

const firstUpper = function(t){
 let o = t.textContent.slice(0,1).toUpperCase() + t.textContent.slice(1)
 return o 
}

console.log(firstUpper(text));

const ilkNSimvol = function(element, N) {
  let str = element.textContent;
  return str.substring(0, N);
};


const goUntill = function(t){
  let str = t.textContent  
  let start = 0
  let end = str.length -1
  for(let i =0 ; i <str.length;i++){
    if(str[i] !==  ' '){
        start = i
        break
    }
  }
  for(let i = str.length - 1; i >= 0; i--){
    if(str[i] !== ' '){
      end = i 
      break
    }
  }
  return str.slice(start , end +1)
}

console.log(goUntill(text));


const cleanString = function(str){
  let result = ''

  for(let i = 0; i < str.length; i++){
    let current = str[i]
    let prev = result[result.length - 1]
    
    // Если текущий пробел И предыдущий пробел → пропускаем
    if(current === ' ' && prev === ' ') {
      continue  // не добавляем
    }
    
    // Иначе добавляем текущий символ
    result += current
  }

  return result
}




const littleorbig = function(element) {
    let str = element.textContent;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        
        if (str[i] === str[i].toUpperCase()) {
            // Если большая буква → делаем маленькой
            result += str[i].toLowerCase();
        } else {
            // Если маленькая буква → делаем большой
            result += str[i].toUpperCase();
        }
    }
    
    return result;
};

// Использование

console.log(littleorbig(text));


let bigOrLittle = function(t){
   
}














