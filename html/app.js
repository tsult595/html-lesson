

let object = {
    name: "John",
    age: 30,
    city: "New York"
}

let copyObject = [object];

console.log(copyObject);


const modifyObject = (obj) => {
    let newObj = Object.assign({}, obj);
    newObj.name = "Jane";
    return newObj;
}

let modifiedObject = modifyObject(object);

console.log(object);
console.log(modifiedObject);

// const shot = () => {
//     window.alert("Hello World");
// }

// setTimeout(shot, 2000);

let objTwo = {...object};

let entries = Object.values(object);

console.log(objTwo);
console.log(entries);

const anotherFunction = () => {
    console.log("This is another function");
}

const higherOrderFunction = (func) => {
    func();
}

higherOrderFunction(anotherFunction);

let arr = [1, 4, 2, 3, 1 , 10, 4, 5];




let findDuplicateTwo = (arr)=>{
    let counts = {};
    let duplicate = [];

    for(let item of arr){
        if(counts[item]){
            counts[item]++;
        } else {
            counts[item] = 1;
        }
        if(counts[item] === 2){
            duplicate.push(item);
        }
    }
    return duplicate;
}

console.log(findDuplicateTwo(arr)); // [4]



let arrs = ["apple", "banana", "orange", "apple", "kiwi", "banana", "banana"];


let newArr = arrs.map((item)=>{
   return item[0].toUpperCase() + item.slice(1);
})

console.log(newArr);


let [first , second] = arrs

let both = [first, second];

console.log(both);

let max = arr.reduce((acc, num) => acc > num ? acc : num, 0);

console.log(max); // 10

let users = [
  {name: "Anna", age: 22},
  {name: "Ivan", age: 17},
  {name: "Oleg", age: 25}
];

let findAnna = users.find(u => u.name === "Anna");

let {name : AnnaName, age : AnnaAge} = findAnna;

console.log(AnnaName); // "Anna"
console.log(AnnaAge); // 22

let mixed = [1, "hi", true, "bye", 5, false, "ok"];

let strings = mixed.filter(item => typeof item === "string");

let words = ["cat", "dog", "cat", "bird", "dog", "dog"];


let howMany = words.reduce((acc, w) => {
    acc[w] = (acc[w] || 0) + 1;
    return acc;
}, {});

console.log(howMany); // { cat: 2, dog: 3, bird: 1 }



let finden = (arr) => {
    let repeated = [];
    arr.forEach((w, idx) => {
        // Проверяем, встречается ли слово ещё раз в массиве (с другим индексом)
        if (
            arr.indexOf(w) !== idx && // если это не первое вхождение
            !repeated.includes(w)     // и мы ещё не добавили его в repeated
        ) {
            repeated.push(w);
        }
    });
    return repeated;
};

console.log(finden(words)); // ["cat", "dog"]


let longest = words.reduce((acc, w) => w.length > acc.length ? w : acc);
console.log(longest);

let userss = [
  { id: 1, name: "Anna", age: 23, city: "Moscow", email: "anna@example.com", active: true , role : "admin"},
  { id: 2, name: "Ivan", age: 17, city: "Kazan", email: "ivan@example.com", active: false  , role : "user"},
  { id: 3, name: "Oleg", age: 25, city: "Moscow", email: "oleg@example.com", active: true , role : "user"},
  { id: 4, name: "Anna", age: 22, city: "Moscow", email: "anna2@example.com", active: false , role : "admin"}
];


let ft = userss.map(u =>
  u.name === "Oleg" ? { ...u, active: !u.active } : u
);

console.log(ft);


const ch = userss.map(f=> ({name: f.name, city: f.city}));




let findNames = userss.map(u=>{
   return u.name
})

console.log(findNames);

let findAdults = userss.filter(u=> u.age > 18 ? u : null)

console.log(findAdults);

let findOldest = userss.reduce((acc , u)=> u.age > acc.age ? u : acc)

console.log(findOldest);


// let uniqueCities = [...new Set(userss.map(u => u.city))];
// console.log(uniqueCities); // ["Moscow", "Kazan"]

let cities = userss.map(u => u.city);
console.log(cities); // ["Moscow", "Kazan", "Moscow", "Moscow"]

let cityCount = {};
userss.forEach(u => {
    cityCount[u.city] = (cityCount[u.city] || 0) + 1;
});
console.log(cityCount); // { Moscow: 3, Kazan: 1 }


let finnm = userss.map(u => u.name);

console.log(finnm);

let upTwoZero = userss.filter(u => u.age > 20);

console.log(upTwoZero);

let only = userss.map(u => ({ names: u.name, cityes: u.city }));
console.log(only);
// [{ name: "Anna", city: "Moscow" }, ...}

let find = userss.find(u => u.id === 3);
console.log(find);

let isMailExist = userss.some(u => u.email === "anna@example.com");
console.log(isMailExist); // true

if(isMailExist){
    console.log("Пользователь с таким email уже существует");
}else{
    console.log("Пользователь с таким email не найден, можно регистрироваться");
}

let activeNames = userss.filter(u => u.active === true).map(u => u.name);
 
  

console.log(activeNames); // ["Anna", "Oleg"]

let adminOnly = userss.filter(u => u.role === "admin");
console.log(adminOnly); // [{ id: 1, name: "Anna", ...}, { id: 4, name: "Anna", ...}]

let yesOrNot = userss.every(u=> u.role === "admin");
console.log(yesOrNot); // false

yesOrNot && console.log("Все пользователи - администраторы");

let sekret = userss.filter(u => u.name.startsWith("A") || u.name.startsWith('a'))
console.log(sekret); // [true, false, false, true]


// 7. Посчитать, сколько пользователей с каждой ролью
let roleCount = {};
userss.forEach(u => {
    roleCount[u.role] = (roleCount[u.role] || 0) + 1;
});
console.log(roleCount); // { admin: 2, user: 2 }


let sek = userss.sort((a, b) => a.age - b.age);
console.log(sek); // Сортировка по возрасту от младшего к старшему

let newArray = userss.map(a=> {
  return {
    emailos: a.email,
    cityes: a.city
  }
})

let newArrWithDestruct = userss.map(({email, city}) => ({email, city}));

let allEmailsFromNewArray = newArray.map(a => a.emailos);
console.log(allEmailsFromNewArray);

console.log(newArray[0].emailos); 
console.log(newArrWithDestruct[0].email);



let change = userss.map(a =>
a.name === "Oleg" ? { ...a, active: false } : a
);

console.log(change);


let dest = userss.map(u=> ({
    names: u.name, emailos: u.email , active: u.active
}))

console.log(dest);


let arrik = [1, 2, 3, -4, 5];

let menfi = arrik.every(u=> u > 0)

let menfiTwo = arrik.map(u=> u > 0 ? u : 0)

console.log(menfi); // false
console.log(menfiTwo); // [1, 2, 3, 0, 5]

let sum = userss.map(u=> u.email ? u.email : null);

console.log(sum);

let deepCopy = JSON.parse(JSON.stringify(userss));

// let i = 0;
// let forward = true;

// function print() {
    //   if (forward) {
        //     if (i <= text.length) {
            //       console.log(text.slice(0, i));
            //       i++;
            //       setTimeout(print, 200);
            //     } else {
                //       forward = false;
                //       i--;
                //       setTimeout(print, 200);
                //     }
                //   } else {
                    //     if (i >= 0) {
                        //       console.log(text.slice(0, i));
                        //       i--;
                        //       setTimeout(print, 200);
                        //     }
                        //   }
                        // }
                        // print();
                        
                        
// let text = "Привет, Теймур!";

// let lets = (text, i = 0, forward = true) => {
//   if (forward) {
//     if (i <= text.length) {
//       console.log(text.slice(0, i));
//       setTimeout(() => lets(text, i + 1, true), 200);
//     } else {
//       setTimeout(() => lets(text, i - 1, false), 200);
//     }
//   } else {
//     if (i >= 0) {
//       console.log(text.slice(0, i));
//       setTimeout(() => lets(text, i - 1, false), 200);
//     }
//   }
// };

// lets(text);












// let txt = "Hello, World!";

// let animateText = (text, index = 0 , ifDone = false) => {
//     console.log(text.slice(0, index));
//     text.length > index ? setTimeout(() => animateText(text, index + 1, ifDone), 300) : null;
//     if(!!ifDone){
//         setTimeout(() => animateText(text, index - 1), 300);
//    }
      
// }

// animateText(txt);


// let t="Hello, World!",d=1;

// (function a(i=0){
//   console.log(t.slice(0,i));
//   d=(i==t.length)?-1:(i==0)?+1:d;
//   setTimeout(()=>a(i+d),300);
// })();


// let txt = "Hello, World!";

// let animateText = (text, index = 0, direction = 1) => {
//   console.log(text.slice(0, index));
//   if (index === text.length) direction = -1;
//   if (index === 0) direction = 1;

//   setTimeout(() => {
//     animateText(text, index + direction, direction);
//   }, 300);
// };

// animateText(txt);  


// let txt = "Hello, World!";

// let animateText = (text, index = 0, ifDone = false) => {
//   console.log(text.slice(0, index));
//   if (!ifDone) {
//     index <= text.length ?
//      setTimeout(() => animateText(text, index + 2, false), 300)
//      : setTimeout(() => animateText(text, index - 2, true), 300);
//   } else {
//     index >= 0 ?
//      setTimeout(() => animateText(text, index - 2, true), 300)
//      : setTimeout(() => animateText(text, 0, false), 300);
//   }
// };

// animateText(txt);
    
let text = "Hello, World!";

if(text.toUpperCase().includes("WORLD")){
    console.log("Слово 'WORLD' найдено в строке");
}

console.log(text.slice(0, 2));

    
let obj = { Moscow: 3, Kazan: 1 , Berlin: 2 , Paris: 4 , London: 5 };


const newObj = new Set(Object.values(obj));



console.log(newObj); // Set(5) { 3, 1, 2, 4, 5 }

let keys = Object.keys(obj);
let values = Object.values(obj);

console.log(keys); // ["Moscow", "Kazan", "Berlin", "Paris", "London"]
console.log(values); // [3, 1, 2, 4, 5]



let sortBy = document.getElementById("sortField").value; 


 let usersSorted = users.sort((a, b) => a[sortBy] - b[sortBy]);

 console.log(usersSorted);
 

let userskoy = { name: "Anna", age: 22, city: "Moscow" };

let { name, age, city } = userskoy;

console.log(name);
console.log(age);
console.log(city);


let stats = { Moscow: 3, Kazan: 1, Berlin: 2 , Paris: 4};
for (let cityy in stats) {
    console.log( stats[cityy] );
}

let colort = ["red", "green", "blue", "yellow", "purple"];

console.log(colort[0]);
console.log(colort.at(-1));

let hi = "Hello";

console.log(hi.split('').reverse().join('')); // "olleH"

let js = "JavaScript";

console.log(
  js.split("").sort((a, b) => a.localeCompare(b)).join("")
);

let names = ["Anna", "Ivan", "Oleg", "Maria" , "Olga", "Oetr"];


const po =(arr)=>{
    arr.filter(u=> u.length > 4).forEach(u=> console.log(u));
}

po(names);




let quantity = 5;
let price = 10;
let film = "Inception";
let b = 50;
let tickets = 0;
let refundable = true;
let refundLimit = 2; 
let refund = 0
let whenBought = null; 
let whenRefunded = null;
let discount = 0.1;
let VAT = 0.5;


let btn = document.getElementById("filmBtn");
let refundBtn = document.getElementById("refundBtn");

btn.addEventListener("click", () => {
if(b > price && quantity > 0){
    tickets = tickets + 1
    price = price - (price * discount) + (price * VAT);
     quantity = quantity - 1
     whenBought = new Date();
    window.alert(`Вы купили билет на фильм ${film}!
        Осталось билетов: ${quantity}.
        У тебя ${tickets} билетов. Потрачено: ${price * tickets} рублей`);
    }else if(quantity === 0){
        window.alert("Билетов больше нет");
    }else{
        window.alert("Недостаточно средств для покупки билета");
    }
    
});

refundBtn.addEventListener("click", () => {
    whenRefunded = new Date();
    if(refundable && tickets > 0 && refund < refundLimit && whenBought && whenRefunded - whenBought < 24 * 60 * 60 * 1000){
        refund = refund + 1;
        tickets = tickets - 1;
        quantity = quantity + 1;
        window.alert(`Вы вернули билет на фильм ${film}.
        Осталось билетов: ${quantity}.
        У тебя ${tickets} билетов. Потрачено: ${price * tickets} рублей`);
    }else{
        window.alert("Zaebal vozvrawat bileti");
    }
})












