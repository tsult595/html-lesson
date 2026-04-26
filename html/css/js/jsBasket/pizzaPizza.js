const images = ["./49d1006b83d2a71e6eeb56d65cd9264e.jpg","./67e6944caca8636c79297eb997a18c30.jpg" , "./1a4a5f81671fd08eeca3e9378bc65218.png"]

let slider = document.querySelector('#slideWrapper')
let back = document.querySelector('#back')
let forward = document.querySelector('#forward')
let lineWrapper = document.querySelector('#lineWrapper')
let container = document.querySelector('#container')
const modalWrapper = document.getElementById("modalWrapper");
const modal = document.getElementById("modal");
let currentIndex = 0

const sliderFn = function(){
    slider.innerHTML = `
    <img class="h-full" src="${images[currentIndex]}" alt="">
      `
 
}

const backFn = function(){
  if(currentIndex === 0){
  currentIndex = images.length - 1
  }else{
    currentIndex--
  }
  sliderFn()
}
const forwardFn = function(){
  if(currentIndex === images.length - 1){
    currentIndex = 0
  }else{
    currentIndex++
  }
    sliderFn()
}

 const data = {
            "data": {
                "category": [
                    "Bütün",
                    "Pidelər",
                    "Pizzalar",
                    "Kabablar"
                ],
                "food": [
                    {
                        "id": 1,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/b5b0ff72-dafb-11ea-98f9-da3a1e599769_k_ymal__pide.jpeg?w=600",
                        "category": "Pidelər",
                        "name": "Kaşarlı Quşbaşı Pide",
                        "composition": "Kiçik hissələrə bölünmüş dana filesi, bibər,  soğan, pomidor, kərə yağı, kaşar pendiri",
                        "price": 15,
                        "quantity" : 3
                    },
                    {
                        "id": 2,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/60c65d7a-3e7c-11ea-8f5b-0a586471b4bf_13-chiken-barbekyu.jpeg?w=600",
                        "category": "Pizzalar",
                        "name": "Çiken Barbekyu",
                        "composition": "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri",
                        "price": 10,
                        "quantity" : 3
                    },
                    {
                        "id": 3,
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90JoNdSCmO37-4N9ek62GjXmIW-XUkEs-rw&s",
                        "category": "Pizzalar",
                        "name": "Cheddar Çiken Club",
                        "composition": "Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu",
                        "price": 12,
                        "quantity" : 3
                    },
                    {
                        "id": 4,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/110c1568-db07-11ea-91ae-ea279f353787_adana_kebap..jpeg?w=600",
                        "category": "Kabablar",
                        "name": "Adana Kabab",
                        "composition": "180 q dana və quzu qiyməsi, közdə pomidor və acı bibər, sumaqlı soğan, bulqur/düyü",
                        "price": 19,
                        "quantity" : 3
                    },
                    {
                        "id": 5,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/7e237064-3e8c-11ea-a723-0a5864733252_7-Qarishiq-et.jpeg?w=600",
                        "category": "Pizzalar",
                        "name": "Meksika",
                        "composition": "Qril Toyuq, Pomidor, Göbələk, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri",
                        "price": 14,
                        "quantity" : 3
                    },
                    {
                        "id": 6,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/30c7e508-db07-11ea-8a76-1a2f8378f118_urfa_kebap...jpeg?w=600",
                        "category": "Kabablar",
                        "name": "Urfa Kabab",
                        "composition": "180 q dana və quzu qiyməsi, közdə pomidor və acı bibər, sumaqlı soğan, bulqur/düyü",
                        "price": 19,
                        "quantity" : 3
                    },
                    {
                        "id": 7,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/7e237064-3e8c-11ea-a723-0a5864733252_7-Qarishiq-et.jpeg?w=600",
                        "category": "Pizzalar",
                        "name": "Qarışıq Ət",
                        "composition": "Pomidor, Oreqano, Mozzarella Pendiri",
                        "price": 15,
                        "quantity" : 3
                    },
                    {
                        "id": 8,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/eef56fb0-db06-11ea-8424-02c139339d10_naml__kebap_kar_s__k.jpeg?w=600",
                        "category": "Kabablar",
                        "name": "Qarışıq Namlı Kabab",
                        "composition": "Adana kababı, urfa kababı, quzu şiş, toyuq şiş, dönər əti, 1 ədəd fındıq lahmacun;  közdə pomidor, acı bibər, bulqur/düyü, sumaqlı soğan",
                        "price": 33,
                        "quantity" : 3
                    },
                    {
                        "id": 9,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/f3b2a7de-dafc-11ea-99b7-827e57abefd7_kar_s__k_pide.jpeg?w=600",
                        "category": "Pidelər",
                        "name": "Qarışıq Pide",
                        "composition": "Kiçik hissələrə bölünmüş dana filesi, dana və quzu qiyməsi, bibər, soğan, pomidor, kaşar pendiri, sucuq, yumurta, kərə yağı",
                        "price": 15,
                        "quantity" : 3
                    },
                    {
                        "id": 10,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/7d726cac-db0c-11ea-ad72-826c824a2093_adana_iskender_kebap.jpeg?w=600",
                        "category": "Kabablar",
                        "name": "Adana İskender Kabab",
                        "composition": "180 q dana və quzu qiyməsi, közdə acı bibər və pomidor, 'İsgəndər dönər' sousu",
                        "price": 21,
                        "quantity" : 3
                    },
                    {
                        "id": 11,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/60c65d7a-3e7c-11ea-8f5b-0a586471b4bf_13-chiken-barbekyu.jpeg?w=600",
                        "category": "Pizzalar",
                        "name": "Çiken Barbekyu",
                        "composition": "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri",
                        "price": 10,
                        "quantity" : 3
                    },
                    {
                        "id": 12,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/7db30926-dafb-11ea-aff5-fa3509a85019_kas_arl__pide..jpeg?w=600",
                        "category": "Pidelər",
                        "name": "Kaşarlı Pide",
                        "composition": "Kaşar pendiri, kərə yağı",
                        "price": 11,
                        "quantity" : 3
                    },
                    {
                        "id": 13,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/7db30926-dafb-11ea-aff5-fa3509a85019_kas_arl__pide..jpeg?w=600",
                        "category": "Pidelər",
                        "name": "Kaşarlı Pide",
                        "composition": "Kaşar pendiri, kərə yağı",
                        "price": 11,
                        "quantity" : 3
                    },
                    {
                        "id": 14,
                        "img": "https://imageproxy.wolt.com/menu/menu-images/5f31066a051911465b2444dd/b5b0ff72-dafb-11ea-98f9-da3a1e599769_k_ymal__pide.jpeg?w=600",
                        "category": "Pidelər",
                        "name": "Qiyməli Pide",
                        "composition": "Dana və quzu qiyməsi, bibər, soğan, pomidor,  kərə yağı",
                        "price": 12,
                        "quantity" : 3
                    }
                ]
            }
        }


const render = function(data){
    let dataArr = data.data.food.filter(item => item.category === "Pizzalar");
    console.log(dataArr);
    
    dataArr.map(item=>(
        container.innerHTML += `
        <div class="max-w-sm rounded-2xl overflow-hidden  bg-white  group">
        
        <!-- Image -->
        <div onclick="modalFn(${item.id})" class="relative">
            <img src="${item.img}" alt="${item.name}" class="w-full h-48 object-cover cursor-pointer" />
            
            <!-- Category badge -->
            <span class="absolute top-3 left-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
                ${item.category}
            </span>
        </div>
    
        <!-- Content -->
        <div class="p-4 flex flex-col gap-3">
            
            <!-- Title -->
            <h3 class="text-lg font-semibold text-gray-800">
                ${item.name}
            </h3>
    
            <!-- Composition -->
            <p class="text-sm text-gray-500 line-clamp-2">
                ${item.composition}
            </p>
    
            <!-- Bottom section -->
            <div class="flex items-center justify-between mt-2">
                
                <!-- Price -->
                <span class="text-lg font-bold text-green-600">
                    ${item.price} ₼
                </span>
    
                <!-- Quantity -->
                <div class="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                    <button class="text-gray-600 hover:text-black">-</button>
                    <span class="text-sm font-medium">${item.quantity}</span>
                    <button class="text-gray-600 hover:text-black">+</button>
                </div>
            </div>
    
            <!-- Button -->
           <button class="mt-3 w-full bg-black text-white py-2 rounded-lg text-sm group-hover:bg-red-500 transition-all duration-300">
                Add to cart
            </button>
        </div>
    </div>
        `
    ))
}

const modalFn = function(id){
    let item = data.data.food.find(x => x.id === id);

    if(item){
        modal.innerHTML = `
            <img src="${item.img}" class="w-full h-48 object-cover rounded-lg"/>
            
            <h2 class="text-xl font-bold mt-3">${item.name}</h2>
            <p class="text-gray-500 mt-2">${item.composition}</p>

            <div class="flex justify-between mt-4">
                <span class="text-green-600 font-bold text-lg">${item.price} ₼</span>
                <span>Quantity: ${item.quantity}</span>
            </div>
        `;

        modalWrapper.classList.remove("hidden");
        modalWrapper.classList.add("block");
    }
}


const closeModal = () => {
    modalWrapper.classList.add("hidden");
    modalWrapper.classList.remove("block");
}

modalWrapper.addEventListener("click", (e) => {
    if(e.target === modalWrapper){
        closeModal();
    }
});

render(data)