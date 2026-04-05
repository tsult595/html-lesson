const dropZone = document.getElementById('dropZone');
const dragItem = document.getElementById('dragItem');

dragItem.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', 'This is the dragged item');
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});