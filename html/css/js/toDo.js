let inp = document.querySelector('#inp')
let btn = document.querySelector('#btn')
let ul = document.querySelector('#ul')
let done = document.querySelector('#done')
let span = document.querySelector('#span')
const dropZone = document.getElementById('dropZone');



dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropZone.addEventListener('drop', async (e) => {
  e.preventDefault();

  const files = e.dataTransfer.files;

  if (files.length === 0) return;

  const file = files[0];

  // 1. Проверка файла (очень рекомендуется)
  if (!file.type.startsWith('image/')) {
    alert('Можно загружать только изображения!');
    return;
  }

  // 2. Проверка размера файла
  if (file.size > 5 * 1024 * 1024) {   // 5 МБ
    alert('Файл слишком большой! Максимум 5 МБ');
    return;
  }

  // 3. Показать превью (то, что ты уже делаешь)
  const fileReader = new FileReader();
  fileReader.onload = function(e) {
    dropZone.style.backgroundImage = `url(${e.target.result})`;
    dropZone.style.backgroundSize = 'cover';
    dropZone.style.backgroundPosition = 'center';
  };
  fileReader.readAsDataURL(file);

    
});



function isDone(btn) {
  if (btn.parentElement.querySelector('span').style.color === "red") {
    btn.parentElement.querySelector('span').style.color = "black";
    return
  }  
  btn.parentElement.querySelector('span').style.color = "red";
}

const toDo = function (){
  ul.innerHTML += `
 <li id="li"class="flex items-center justify-between bg-gray-200 p-4 rounded-2xl">
    <span id="span">${inp.value}</span>
    <button onclick="this.parentElement.remove()" id="del" class="text-red-500 hover:text-red-700">Delete</button>
    <button onclick="isDone(this)" class="text-red-500 hover:text-red-700">done</button>
 </li>
  `
  inp.value = ''
}