let basketCount = 0;
const go = document.querySelector('#go');

function addTo(){
  basketCount++;
  go.innerHTML = basketCount;
}

window.addTo = addTo;

export function renderCard(arr) {
  const cardWrapper = document.getElementById('cardWrapper');
    arr.forEach(e =>{
    cardWrapper.innerHTML += `
         <div class="w-[250px] h-[250px] bg-gray-200 rounded-2xl flex flex-col p-5">
               <h3 class="text-lg font-semibold">${e.title}</h3>
               <p>${e.description}</p>
               <p>Category: ${e.category}</p>
               <p>$${e.price}</p>
               <div class="p-9">in stock: ${e.stock}</div>
               <button onclick="addTo()" class="p-4 bg-blue-500 text-white">Add to Basket</button>
               <button class="p-4 bg-red-500 text-white">Delete</button>
           </div>
       `
    })
}


