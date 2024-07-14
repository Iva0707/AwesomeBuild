const buildItem = document.querySelectorAll('.build_item') /* массив со всеми svg path */

const cellAddress = document.querySelector('#address')
const cellFlats = document.querySelector('#flats')
const cellFlatsFree = document.querySelector('#flats-free')
const cellFlatsBooked = document.querySelector('#flats-booked')
const cellFlatsSold = document.querySelector('#flats-sold')

const showInformation =(cell, atrr)=> buildItem.forEach(object => { /* обратились к каждому обьекту с масссива */ /* сделали из нее константу и функцию */
    object.addEventListener('mouseover', ()=> { /* добавляем функцию по наведению мыши */
        const value = object.getAttribute(atrr) /* создаем переменную с получением атрибута */
        cell.innerText = value /* заменяем текст html на полученный из атрибута */
    })
})

showInformation(cellAddress, 'data-address')
showInformation(cellFlats, 'data-flats')
showInformation(cellFlatsFree, 'data-flats-free')
showInformation(cellFlatsBooked, 'data-flats-booked')
showInformation(cellFlatsSold, 'data-flats-sold')

const calcInformation =()=> buildItem.forEach(item => {

    let flats = Number (item.getAttribute('data-flats'))
    let flatsBooked = Number (item.getAttribute('data-flats-booked'))
    let flatsSold = Number (item.getAttribute('data-flats-sold'))
    
    let flatsFree = flats - (flatsBooked + flatsSold)
    item.setAttribute('data-flats-free', flatsFree)

    const dataFlatsFree = item.getAttribute('data-flats-free')
    
    if (dataFlatsFree === "0") {
        item.classList.add('sold');
        item.addEventListener('click', (event) => {
            event.preventDefault();
        })
        item.setAttribute('data-trigger-modal', 'sold')
    }
});

calcInformation()