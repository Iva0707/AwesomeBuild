
// const flatArr = [
//     {
//         id: 0,
//         flatNumber: '1',
//         rooms: '3',
//         square: '82.3',
//         kitchen: '14.2',
//         room_1: '16.9',
//         room_2: '12.1',
//         room_3: '18.9',
//         price: '1500',
//         totallPrice: '1200',
//     },
//     {
//         id: 1,
//         flatNumber: '2',
//         rooms: '2',
//         square: '60.7',
//         kitchen: '9.1',
//         room_1: '19.0',
//         room_2: '16.6',
//         price: '1500',
//         totallPrice: '1200',
//     },
//     {
//         id: 2,
//         flatNumber: '3',
//         rooms: '2',
//         square: '60.7',
//         kitchen: '9.1',
//         room_1: '19.0',
//         room_2: '16.6',
//         price: '1500',
//         totallPrice: '1200',
//     },
//     {
//         id: 3,
//         flatNumber: '4',
//         rooms: '3',
//         square: '82.0',
//         kitchen: '14.0',
//         room_1: '19.0',
//         room_2: '16.9',
//         room_3: '12.2',
//         price: '1500',
//         totallPrice: '1200',
//     },
//     {
//         id: 4,
//         flatNumber: '5',
//         rooms: '3',
//         square: '79.7',
//         kitchen: '14.2',
//         room_1: '19.0',
//         room_2: '12.2',
//         room_3: '16.9',
//         price: '1500',
//         totallPrice: '1200',
//     },
//     {
//         id: 5,
//         flatNumber: '6',
//         rooms: '1',
//         square: '39.2',
//         kitchen: '9.1',
//         room_1: '19.0',
//         price: '1500',
//         totallPrice: '1200',
//     },
//     {
//         id: 6,
//         flatNumber: '7',
//         rooms: '1',
//         square: '42.0',
//         kitchen: '9.1',
//         room_1: '21.9',
//         price: '1500',
//         totallPrice: '1200',
//     },
//     {
//         id: 7,
//         flatNumber: '8',
//         rooms: '1',
//         square: '39.2',
//         kitchen: '9.1',
//         room_1: '19.0',
//         price: '1500',
//         totallPrice: '1200',
//     },
//     {
//         id: 8,
//         flatNumber: '9',
//         rooms: '3',
//         square: '79.3',
//         kitchen: '14.0',
//         room_1: '18.9',
//         room_2: '16.9',
//         room_3: '12.1',
//         price: '1500',
//         totallPrice: '1200',
//     },
// ]



const switchToFlat =()=> {
    
    const myUrl = new URLSearchParams(window.location.search)
    const flatNumber = myUrl.get('flatNumber')

    function renderContent(flatNumber) {

       const selectedContent = document.getElementById(`${flatNumber}`)
       if (selectedContent) {
           selectedContent.classList.add('active')
       } else {
           document.getElementById(`${1}`).classList.add('active')
       }
    }
    renderContent(flatNumber);

    const flatInfo = document.querySelector('.flat_info')

    const renderInformation = (item) => { 
            let flatPrice
            if (item.status === 'action') {
                flatPrice = '1375';
            } else {
                flatPrice = '1500';
            }

            const priceTotal = Number(item.square) * Number(flatPrice)
            const roundedPriceTotal = Number(priceTotal).toLocaleString('de-DE', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })          

            let flatInformation =  `<li class="list_item">Кількість кімнат: <i>${item.rooms}</i></li>
                    <li class="list_item">Площа: <i>${item.square}м²</i></li>
                    <li class="list_item">Кухня: <i>${item.kitchen}м²</i></li>
                    <li class="list_item">Кімната 1: <i>${item.room_1}м²</i></li>`

            if (item.room_2) {
                flatInformation += `<li class="list_item">Кімната 2: <i>${item.room_2}м²</i></li>`
            }
            if (item.room_3) {
                flatInformation += `<li class="list_item">Кімната 3: <i>${item.room_3}м²</i></li>`
            }
    
            flatInformation += `
                <li class="list_item">Ціна за м²: <i>${flatPrice}$</i></li>
                <li class="list_item">Вартість: <i>${roundedPriceTotal}$</i></li>`
        
        flatInfo.innerHTML = flatInformation
    }

    const flats = document.querySelectorAll('.flat_content')

    flats.forEach(flat => {
        if (flat.classList.contains('active')) {
            const activeFlat = flat.getAttribute('id')
            const selectedFlat = flatArr.find(item => item.flatNumber == activeFlat)
            renderInformation(selectedFlat)
        }
    })

    } 

document.querySelector('.page-flat') ? switchToFlat() : null;