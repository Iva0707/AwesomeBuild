const flatArr = [
    {
        id: 0,
        flatNumber: '1',
        rooms: '3',
        square: '82.3',
        price: '1500',
        priceTotal: '',
        status: 'action',
    },
    {
        id: 1,
        flatNumber: '2',
        rooms: '2',
        square: '60.7',
        price: '1500',
        priceTotal: '',
        status: 'sold',
    },
    {
        id: 2,
        flatNumber: '3',
        rooms: '2',
        square: '60.7',
        price: '1500',
        priceTotal: '',
        status: 'booked',
    },
    {
        id: 3,
        flatNumber: '4',
        rooms: '3',
        square: '82',
        price: '1500',
        priceTotal: '',
        status: 'booked',
    },
    {
        id: 4,
        flatNumber: '5',
        rooms: '3',
        square: '79.7',
        price: '1500',
        priceTotal: '',
        status: 'sold',
    },
    {
        id: 5,
        flatNumber: '6',
        rooms: '1',
        square: '39.2',
        price: '1500',
        priceTotal: '',
        status: 'sold',
    },
    {
        id: 6,
        flatNumber: '7',
        rooms: '1',
        square: '42',
        price: '1500',
        priceTotal: '',
        status: 'sold',
    },
    {
        id: 7,
        flatNumber: '8',
        rooms: '1',
        square: '39.2',
        price: '1500',
        priceTotal: '',
        status: 'action',
    },
    {
        id: 8,
        flatNumber: '9',
        rooms: '3',
        square: '79.3',
        price: '1500',
        priceTotal: '',
        status: 'free',
    },
]

const installFloor =()=> {
        const flats = document.querySelectorAll('.flat') //Создаем массив с квартирами
        const flatInfo = document.querySelector('.floor_options') //Создаем переменную для инфо о квартире

        const removeActiveClass =()=> flats.forEach (item => {
            item.classList.remove('active') //Удаляем активный класс
        })

        const setInitialActive =()=> { //Устанвливаем на первую квартиру класс активный
            const firstInitialFlat = document.querySelector('.flat')
            firstInitialFlat.classList.add('active')
        }

        setInitialActive()
        const initialVallue = [flatArr[0]] //Создаем переменную с одной квартирой с массива и вкладываем в аргумент функциии

        const renderInformation = (array) => { //Создаем фунцию с аргументом
            const flatInformation = array.map(item => { //перебираем вложенный аргумент 
                const statusText = item.status === 'action' ? 'Акція' :
                                    item.status === 'sold' ? 'Продано' :
                                     item.status === 'booked' ? 'Бронь' : 'Вільно';

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
                });                     

                return (`<div class="floor_option">
                            <div>Номер квартири:</div>
                            <div>${item.flatNumber}</div>
                        </div>
                        <div class="floor_option">
                            <div>Кількість кімнат:</div>
                            <div>${item.rooms}</div>
                        </div>
                        <div class="floor_option">
                            <div>Площа:</div>
                            <div>${item.square}м²</div>
                        </div>
                        <div class="floor_option">
                            <div>Ціна за м²</div>
                            <div>${flatPrice}$</div>
                        </div>
                        <div class="floor_option">
                            <div>Загальна вартість:</div>
                            <div>${roundedPriceTotal}$</div>
                        </div>
                        <div class="floor_option">
                            <div>Статус:</div>
                            <div class="status_option">${statusText}</div>
                        </div>`
                )} //возвращаем информацию и вкладываем в переменную flatInformation
            )
            flatInfo.innerHTML = flatInformation //Меняем текст в инфо в разметке
        }
        renderInformation(initialVallue) //Вкладываем первую квартиру в аргумент функции

        flats.forEach(flat => { //Обращаемся к каждой квартире
            flat.addEventListener('click', () => { //Устанавливаем слушатель событий
                if (flat.classList.contains('active') && !flat.classList.contains('sold')) {
                    window.location.href = 'flat-item.html'
                }

                removeActiveClass()

                flat.classList.add('active') //По клику добавляем активный класс
    
                    const thisFlat = flat.getAttribute('data-flat-number') //Получаем айди квартиры по которой был клик
                    const flatNumber = flatArr.filter (item => item.flatNumber === thisFlat)
                    
                    renderInformation(flatNumber) //Вкладываем квартиру по которой был клик в аргумент функции
                })

                const setFlatStatus =()=> flatArr.find(item => {
                    const thisFlat = flat.getAttribute('data-flat-number')
                    if (Number(item.flatNumber) === Number(thisFlat)) {
                        flat.classList.add(item.status)
                    }
                });

                setFlatStatus();

            if (flat.classList.contains('action')) {
                flat.querySelector('.flat_status').innerHTML = `Акція`
            } else if (flat.classList.contains('booked')) {
                flat.querySelector('.flat_status').innerHTML = `Бронь`
            } else if (flat.classList.contains('sold')) {
                flat.querySelector('.flat_status').innerHTML = `Продано`
                flat.setAttribute('data-trigger-modal', 'sold_flat')
            } else {
                flat.querySelector('.flat_status').innerHTML = `Вільно`
            } //Добавляем условие смены статуса при наличии определенного класса

        })

        const trigger = document.querySelectorAll('[data-flat-trigger]')

        function redirectToFlatItem(flatNumber) {
            const baseUrl = "http://localhost:3000/flat-item.html";
            const url = `${baseUrl}?flatNumber=${flatNumber}`;
            window.location.href = url;
        }

        trigger.forEach (item => {
            item.addEventListener('click', () => {
                const triggerNumber = item.getAttribute ('data-flat-trigger')
                redirectToFlatItem(triggerNumber)
            })
        })
            
}

document.querySelector('.page-floor') ? installFloor() : null; //Включаем функцию только для page-floor