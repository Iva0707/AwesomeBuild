const modal = document.querySelector('.modal') /* Модальное окно */
const modalTriger = document.querySelectorAll("[data-modal='sold']") /* Кнопка для вызова modal */
const modalClose = document.querySelectorAll("[data-modal='close']") /* Кнопка для закрытия modal */

function showModal () {
    modal.classList.add('show')
}

function closeModal () {
    modal.classList.remove('show')
}

modalTriger.forEach(triger => {
    triger.addEventListener('click', showModal)
})

modalClose.forEach(close => {
    close.addEventListener('click', closeModal)
})

modal.addEventListener('click', (event) => {
    event.target.classList.remove('show')
})