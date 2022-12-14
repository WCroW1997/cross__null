const area = document.querySelector('.area');
const content = document.querySelector('.content')
const modalWrapper = document.querySelector('.modal__wraper')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.btn__close')
const boxes = document.getElementsByClassName('box')
let move = 0
let result = ''


area.addEventListener('click', e =>{
   if (e.target.className = 'box') {
        move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O'
        move++
        check()
   }
})

const check = () =>{
    const arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8],
    ]
    for (let index = 0; index < arr.length; index++) {
        if(
            boxes[arr[index][0]].innerHTML == 'X' &&  boxes[arr[index][1]].innerHTML == 'X' && boxes[arr[index][2]].innerHTML == 'X'
        ) {
            result = 'хрестики'
            prepareResult(result)
        } else if(
            boxes[arr[index][0]].innerHTML == 'O' &&  boxes[arr[index][1]].innerHTML == 'O' && boxes[arr[index][2]].innerHTML == 'O'
        ) {
            result = 'нулики'
            prepareResult(result)
        } 
    }
}

const prepareResult = winner =>{
    content.innerHTML =  `Перемогли: ${winner}`
    modal.style.display = 'block'
}

const closeModal = () =>{
    modal.style.display = 'none'
    for (let index = 0; index < boxes.length; index++) {
        boxes[index].innerHTML = ''
    }
    move = 0
}

btnClose.addEventListener('click', closeModal)
modalWrapper.addEventListener('click', closeModal)