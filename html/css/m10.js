
const slider = {
    image : ['mini.png' , 'img2.png'],
    subImage : ['bus.svg' , 'credit.svg'],
    title : ['M10 ilə hər alış-verişiniz bonus qazanın!' , 'M10 ilə hər alış-verişiniz heyat super!'],
}


let currentIndex = 0;


const sliderImage = document.getElementById('sliderImage');
const titleElement = document.getElementById('sliderTitle');
const p = document.getElementById('p');
const subImage = document.getElementById('subImage');

function updateSlider() {
   sliderImage.style.backgroundImage = `url('${slider.image[currentIndex]}')`;
   titleElement.textContent = slider.title[currentIndex];
   subImage.innerHTML = `<img class="w-full h-full object-cover" src="${slider.subImage[currentIndex]}" alt="">`;
}

function leftClick() {
    if(currentIndex === 0){
        currentIndex = slider.image.length - 1;
    } 
    else {  // Просто else!
      currentIndex--;
    }
    updateSlider();
}


// function leftClick() {
//    currentIndex === 0 ? currentIndex = slider.image.length - 1 : currentIndex--;
//    updateSlider();
// }

function rightClick() {
    if(currentIndex === slider.image.length - 1){
        currentIndex = 0;
    } 
    else {  // Просто else!
      currentIndex++;
    }
    updateSlider();
}

// function rightClick() {
//     currentIndex === slider.image.length - 1 ? currentIndex = 0 : currentIndex++;
//     updateSlider();
// }



function opener(){
    p.classList.toggle('max-h-0');
    p.classList.toggle('max-h-[200px]');
}

// const picker = function(ind){
//     slider.image[currentIndex] = slider.image[ind];
//     updateSlider();
//     if(currentIndex === ind){        
//      return;
//     }
// } 

const picker = function(ind){
    currentIndex = (ind);
    updateSlider();
}



let see = slider.image[0];
console.log(see);



