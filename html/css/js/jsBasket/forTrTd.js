

let table = document.querySelector('#table')
let table2 = document.querySelector('#table2')

let kod = ''
let sum = 0

for (let index = 0; index < 2; index++){
  kod += `<tr>`
  
  for (let j = 0; j < 6; j++){
    kod += `<td class="border border-black p-4">${sum++}</td>`
  }
  
   `</tr>`
}

table.innerHTML = kod

let kodus = ''
let x = 0


   for(let i = 0; i < 3; i++){
    kodus += `<tr>`
     for(let j = 0; j< 3; j++){
        x++
     kodus += `<td class="border border-black p-4">${x % 2 ? x : ''}</td>`
     }
     kodus += `</tr>`
}

table2.innerHTML = kodus


let tableMult = document.querySelector('#tableMultiplication')

let kodd = ''

for(let i = 0; i < 10 ; i++){
   kodd += `<tr>` 
   for(let j = 0 ; j < 10; j++) {
     if(i == 0 && j == 0){
        kodd += `<td class="border border-black bg-blue-500 p-4 w-12 text-center"></td>`
     }else if(i == 0){
        // Первая строка
        kodd += `<td class="border border-black bg-blue-500 p-4 w-12 text-center">${j}</td>`
     }else if(j == 0){
        // Первый столбец
        kodd += `<td class="border border-black bg-blue-500 p-4 w-12 text-center">${i}</td>`
     }else{
        kodd += `<td class="border border-black p-4 w-12 text-center">${i * j}</td>`
     }
   }
   kodd += `</tr>`
}

tableMult.innerHTML = kodd




let chess = document.querySelector('#chess')

let ch = ''

// for(let i =0; i < 8; i++){
//     ch += `<tr>`
//     for(let j = 0; j < 8; j++){
//      if(i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0){
//       ch += `<td class="bg-white border border-black p-4 w-12 text-center"></td>`
//      }else if(j % 2 === 0 && i % 2 !== 0 || j % 2 !== 0 && i % 2 === 0){
//         ch += `<td class="bg-black border border-black p-4 w-12 text-center"></td>`
//      }   
//     }
//     ch += `</tr>`
// }

for(let i =0; i < 8; i++){
    ch += `<tr>`
    for(let j = 0; j < 8; j++){
     if(i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0){
      ch += `<td class="bg-white border border-black p-4 w-12 text-center"></td>`
     }else if(j % 2 === 0 && i % 2 !== 0 || j % 2 !== 0 && i % 2 === 0){
        ch += `<td class="bg-black border border-black p-4 w-12 text-center"></td>`
     } 

    }
    ch += `</tr>`
}

chess.innerHTML = ch


let task = document.querySelector('#task')

let kodos = ''
let xx = 1

for(let i = 1 ; i <= 5 ; i++){
    kodos += `<tr>`
    for(let j = 1; j <= 5 ; j++){  
        xx++
      kodos += `<td class="bg-white border border-black p-4 w-12 text-center">${j <=i ? j : ''}</td>` 
    }
    kodos += `</tr>`
}

task.innerHTML = kodos

let task2 = document.querySelector('#task2')

let kodos2 = ''
let xxx = 1

for(let i =1 ; i <= 5 ; i++){
      kodos2 += `<tr>`
      for(let j = 1; j <= 5 ; j++){  
        xxx++
      kodos2 += `<td class="bg-white border border-black p-4 w-12 text-center">${j % 2 !==0 ? j : ''}</td>` 
    }
      kodos2 += `</tr>`
}

task2.innerHTML = kodos2


let task3 = document.querySelector('#task3')

let kodos3 = ''
let xxxx = 0

for(let i =1 ; i <= 5 ; i++){
      kodos3 += `<tr>`
      for(let j = 1; j <= 5 ; j++){  
        xxxx++
      kodos3 += `<td class="bg-white border border-black p-4 w-12 text-center">${xxxx % 2 !== 0 ? xxxx : ''}</td>` 
    }
      kodos3 += `</tr>`

}

task3.innerHTML = kodos3

let task4 = document.querySelector('#task4')

let kodos4 = ''


for(let i = 1 ; i <= 5 ; i++){
      kodos4 += `<tr>`
      for(let j = 1; j <= 5 ; j++){  
       
      kodos4 += `<td class="bg-white border border-black p-4 w-12 text-center">${i+j-1}</td>` 
    }
      kodos4 += `</tr>`
}

task4.innerHTML = kodos4

let task5 = document.querySelector('#task5')

let kodos5 = ''



for(let i = 0 ; i < 5 ; i++){
      kodos5 += `<tr>`
      for(let j = 0; j < 5 ; j++){  
      kodos5 += `<td class="bg-white border border-black p-4 w-12 text-center">${(i+j)%2 ? 1:0}</td>` 
    }
      kodos5 += `</tr>`
}

task5.innerHTML = kodos5

let chess2 = document.querySelector('#chess2')

let ch2 = ''

for(let i =0; i < 8; i++){
    ch2 += `<tr>`
      for(let j = 0; j < 8; j++){
       if((i+j) % 2 !== 0){
      ch2 += `<td class="bg-black border border-black p-4 w-12 text-center"></td>`  
       } else{
         ch2 += `<td class="bg-white border border-black p-4 w-12 text-center"></td>` 
       } 
      }
    ch2 += `</tr>`
}

chess2.innerHTML = ch2


let task6 = document.querySelector('#task6')

let kodak = ''

for(let stroka = 0; stroka < 4; stroka++){
  kodak += `<tr>`
  for(let stolb = 0; stolb < 4 ; stolb++){
     if(stolb == 0 || stroka == 0 || stolb == 3 || stroka == 3){
        kodak += `<td class="bg-black border border-black p-4 w-12 text-center"></td>` 
     } else {
        kodak += `<td class="bg-white border border-black p-4 w-12 text-center">${stolb}</td>` 
     }
  }
  kodak += `</tr>`
}

task6.innerHTML = kodak


let task7 = document.querySelector('#task7')

let kodak7 = ''

for(let stroka = 0; stroka < 4; stroka++){
  kodak7 += `<tr>`
  for(let stolb = 0; stolb < 4 ; stolb++){
     if(stolb % 2 === 0){
        kodak7 += `<td class="bg-black border border-black p-4 w-12 text-center"></td>` 
     } else {
        kodak7 += `<td class="bg-white border border-black p-4 w-12 text-center">${stolb}</td>` 
     }
  }
  kodak7 += `</tr>`
}

task7.innerHTML = kodak7

let task8 = document.querySelector('#task8')

let kodak8 = ''

for(let stroka = 0; stroka < 4; stroka++){
  kodak8 += `<tr>`
  for(let stolb = 0; stolb < 4 ; stolb++){
     if(stolb < 4 - stroka){
        kodak8 += `<td class="bg-green-500 border border-black p-4 w-12 text-center"></td>` 
     } else {
        kodak8 += `<td class="bg-white border border-black p-4 w-12 text-center"></td>` 
     }
  }
  kodak8 += `</tr>`
}

task8.innerHTML = kodak8

let task9 = document.querySelector('#task9')

let kodak9 = ''

for(let stroka = 0; stroka < 4; stroka++){
  kodak9 += `<tr>`
  for(let stolb = 0; stolb < 4 ; stolb++){
     if(stroka %2 !==0){
        kodak9 += `<td class="bg-blue-300 border border-black p-4 w-12 text-center"></td>` 
     } else {
        kodak9 += `<td class="bg-white border border-black p-4 w-12 text-center"></td>` 
     }
  }
  kodak9 += `</tr>`
}

task9.innerHTML = kodak9

let task10 = document.querySelector('#task10')

let kodak10 = ''

for(let stroka = 0; stroka < 4; stroka++){
  kodak10 += `<tr>`
  
  for(let stolb = 0; stolb < 4 ; stolb++){

    if(stroka == stolb || stroka + stolb == 3){
      kodak10 += `<td class="bg-blue-300 border border-black p-4 w-12 text-center">${stolb}${stroka}
      <img class="object-contain" src="../../lungo.jpg" alt="">
      </td>` 
    } else {
      kodak10 += `<td class="bg-white border border-black p-4 w-12 text-center">
      
      </td>` 
    }

  }

  kodak10 += `</tr>`
}

task10.innerHTML = kodak10

let task11 = document.querySelector('#task11')

let kodak11 = ''

for(let stroka = 0; stroka < 4; stroka++){
  kodak11 += `<tr>`
  for(let stolb = 0; stolb < 4 ; stolb++){
    kodak11 += `<td class="bg-blue-300 border border-black p-4 w-12 text-center">${stolb}${stroka}</td>` 
  }
  kodak11 += `</tr>`
}

task11.innerHTML = kodak11

let task12 = document.querySelector('#task12')

let kodak12 = ''

for(let stroka = 0; stroka < 4; stroka++){
  kodak12 += `<tr>`
  for(let stolb = 0; stolb < 4 ; stolb++){
     if((stroka < stolb || stroka == stolb)){
        kodak12 += `<td class="bg-blue-300 border border-black p-4 w-12 text-center">${stolb}${stroka}</td>` 
     } else {
        kodak12 += `<td class="bg-white border border-black p-4 w-12 text-center"></td>` 
     }
  }
  kodak12 += `</tr>`
}

task12.innerHTML = kodak12


let task13 = document.querySelector('#task13')

let kodak13 = ''

for(let stroka = 0; stroka < 4; stroka++){
  kodak13 += `<tr>`
  for(let stolb = 0; stolb < 4 ; stolb++){
     if((stroka >= stolb)){
        kodak13 += `<td class="bg-blue-300 border border-black p-4 w-12 text-center">${stolb}${stroka}</td>` 
     } else {
        kodak13 += `<td class="bg-white border border-black p-4 w-12 text-center"></td>` 
     }
  }
  kodak13 += `</tr>`
}

task13.innerHTML = kodak13

let task14 = document.querySelector('#task14')

let kodak14 = ''

for(let stroka = 0; stroka < 8; stroka++){
  kodak14 += `<tr>`
  for(let stolb = 0; stolb < 8 ; stolb++){
     if(stolb + stroka <= 7){
        kodak14 += `<td class="bg-blue-300 border border-black p-4 w-12 text-center">${stolb}${stroka}</td>` 
     } else {
        kodak14 += `<td class="bg-white border border-black p-4 w-12 text-center">${stolb}${stroka}</td>` 
     }
  }
  kodak14 += `</tr>`
}

task14.innerHTML = kodak14


// let task15 = document.querySelector('#task15')

// let kodak15 = ''

// for(let stroka = 0; stroka < 8; stroka++){
//   kodak15 += `<tr>`
//   for(let stolb = 0; stolb < 8 ; stolb++){
//      if(stolb <= stroka){
//         kodak15 += `<td class="bg-blue-300 border border-black p-4 w-12 text-center">${stolb}${stroka}</td>` 
//      } else {
//         kodak15 += `<td class="bg-white border border-black p-4 w-12 text-center">${stolb}${stroka}</td>` 
//      }
//   }
//   kodak15 += `</tr>`
// }

// task15.innerHTML = kodak15


let task15 = document.querySelector('#task15')

let kodak15 = ''

for(let stroka = 0; stroka < 8; stroka++){
  kodak15 += `<tr>`
  for(let stolb = 0; stolb < 8 ; stolb++){
     if((stolb + stroka) ==7 && stolb < 5){
        kodak15 += `<td class="bg-blue-300 border border-black p-4 w-12 text-center">${stolb}${stroka}</td>` 
     } else {
        kodak15 += `<td class="bg-white border border-black p-4 w-12 text-center">${stolb}${stroka}</td>` 
     }
  }
  kodak15 += `</tr>`
}

task15.innerHTML = kodak15