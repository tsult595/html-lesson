


let flag = false

const cross = function(x){
  // Если ячейка уже заполнена, ничего не делаем
  if(x.innerHTML !== '') return
  
  flag = !flag
  x.innerHTML = flag? 'X' : 'O'
  
    gamerules()

}

const gamerules = function(){
  let cells = document.querySelectorAll('.cell')
  let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ] 
    for(let combo of winCombos){
        let [a, b, c] = combo
        if(cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML){
            alert(`${cells[a].innerHTML} wins!`)
            cells.forEach(cell => cell.innerHTML = '')
            return
        }
    }
    // Проверка на ничью
    if([...cells].every(cell => cell.innerHTML !== '')){
        alert('Draw!')
        cells.forEach(cell => cell.innerHTML = '')
    } 
}  

