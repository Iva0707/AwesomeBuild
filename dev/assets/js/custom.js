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






// const showNumber =(a, b, c)=> {  /* создаем аргументы */
//     console.log('noArgument', c, a, b, c)  /* задаем пордок отображения аргументов */
// }

// showNumber('arg-a', 'arg-b', 'arg-c')  /* значение для аргументов 1 */
// showNumber('arg-1', 'arg-2', 'arg-3')  /* значение для аргументов 2 */