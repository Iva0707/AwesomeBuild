
const flatPageArr = [
    {
        id: 0,
        roomsQuantity: '3',
        square: '82.3',
        kitchen: '14.2',
        room_1: '16.9',
        room_2: '12.1',
        room_3: '18.9',
        price: '1500',
        totallPrice: '1200',
    },
    {
        id: 1,
        roomsQuantity: '2',
        square: '60.7',
        kitchen: '9.1',
        room_1: '19.0',
        room_2: '16.6',
        room_3: '',
        price: '1500',
        totallPrice: '1200',
    },
    {
        id: 2,
        roomsQuantity: '2',
        square: '60.7',
        kitchen: '9.1',
        room_1: '19.0',
        room_2: '16.6',
        room_3: '',
        price: '1500',
        totallPrice: '1200',
    },
    {
        id: 3,
        roomsQuantity: '3',
        square: '82.0',
        kitchen: '14.0',
        room_1: '19.0',
        room_2: '16.9',
        room_3: '12.2',
        price: '1500',
        totallPrice: '1200',
    },
    {
        id: 4,
        roomsQuantity: '3',
        square: '79.7',
        kitchen: '14.2',
        room_1: '19.0',
        room_2: '12.2',
        room_3: '16.9',
        price: '1500',
        totallPrice: '1200',
    },
    {
        id: 5,
        roomsQuantity: '1',
        square: '39.2',
        kitchen: '9.1',
        room_1: '19.0',
        room_2: '',
        room_3: '',
        price: '1500',
        totallPrice: '1200',
    },
    {
        id: 6,
        roomsQuantity: '1',
        square: '42.0',
        kitchen: '9.1',
        room_1: '21.9',
        room_2: '',
        room_3: '',
        price: '1500',
        totallPrice: '1200',
    },
    {
        id: 7,
        roomsQuantity: '1',
        square: '39.2',
        kitchen: '9.1',
        room_1: '19.0',
        room_2: '',
        room_3: '',
        price: '1500',
        totallPrice: '1200',
    },
    {
        id: 8,
        roomsQuantity: '3',
        square: '79.3',
        kitchen: '14.0',
        room_1: '18.9',
        room_2: '16.9',
        room_3: '12.1',
        price: '1500',
        totallPrice: '1200',
    },
]

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








    const flats = document.querySelectorAll('.flat_content') //Создаем массив с квартирами

    flats.forEach(flat => {
        
        if (flat.classList.contains('active')) {
            const activeFlat = flat.getAttribute('id')
        }
    
    })



    

    const flatInfo = document.querySelector('.flat_info')

    const renderInformation = (array) => { //Создаем фунцию с аргументом
        const flatInformation = array.map(item => { //перебираем вложенный аргумент 
            // const statusText = item.status === 'action' ? 'Акція' :
            //                     item.status === 'sold' ? 'Продано' :
            //                      item.status === 'booked' ? 'Бронь' : 'Вільно';

            //                      let flatPrice
            //                      if (item.status === 'action') {
            //                          flatPrice = '1375';
            //                      } else {
            //                          flatPrice = '1500';
            //                      }

            // const priceTotal = Number(item.square) * Number(flatPrice)
            // const roundedPriceTotal = Number(priceTotal).toLocaleString('de-DE', {
            //     minimumFractionDigits: 0,
            //     maximumFractionDigits: 0
            // });           

            return (`<li class="list_item">Кількість кімнат: <i>${item.roomsQuantity}</i></li>
                    <li class="list_item">Площа: <i>${item.square}м²</i></li>
                    <li class="list_item">Кухня: <i>${item.kitchen}м²</i></li>
                    <li class="list_item">Кімната 1: <i>${item.room_1}м²</i></li>
                    <li class="list_item">Кімната 2: <i>${item.room_2}м²</i></li>
                    <li class="list_item">Кімната 3: <i>${item.room_3}м²</i></li>
                    <li class="list_item">Ціна за м²: <i>${item.price}$</i></li>
                    <li class="list_item">Вартість: <i>${item.totallPrice}$</i></li>`
            )} //возвращаем информацию и вкладываем в переменную flatInformation
        )
        flatInfo.innerHTML = flatInformation //Меняем текст в инфо в разметке


    }
    renderInformation(flatPageArr) //Вкладываем первую квартиру в аргумент функции






    }   
document.querySelector('.page-flat') ? switchToFlat() : null;