const flatArr = [
    {
        id: 0,
        flatNumber: '1',
        rooms: '3',
        square: '82,3м²',
        price: '1500$',
        priceTotal: '123,450$',
        status: 'Бронь',
    },
    {
        id: 1,
        flatNumber: '2',
        rooms: '2',
        square: '60,7м²',
        price: '1500$',
        priceTotal: '91,050$',
        status: 'Продано',
    },
    {
        id: 2,
        flatNumber: '3',
        rooms: '2',
        square: '60,7м²',
        price: '1500$',
        priceTotal: '91,050$',
        status: 'Акція',
    },
    {
        id: 3,
        flatNumber: '4',
        rooms: '3',
        square: '82м²',
        price: '1500$',
        priceTotal: '123,000$',
        status: 'Бронь',
    },
    {
        id: 4,
        flatNumber: '5',
        rooms: '3',
        square: '79,7м²',
        price: '1500$',
        priceTotal: '119,550$',
        status: 'Продано',
    },
    {
        id: 5,
        flatNumber: '6',
        rooms: '1',
        square: '39,2м²',
        price: '1500$',
        priceTotal: '58,800$',
        status: 'Бронь',
    },
    {
        id: 6,
        flatNumber: '7',
        rooms: '1',
        square: '42м²',
        price: '1500$',
        priceTotal: '63,000$',
        status: 'Продано',
    },
    {
        id: 7,
        flatNumber: '8',
        rooms: '1',
        square: '39,2м²',
        price: '1500$',
        priceTotal: '58,800$',
        status: 'Акція',
    },
    {
        id: 8,
        flatNumber: '9',
        rooms: '3',
        square: '79,3м²',
        price: '1500$',
        priceTotal: '118,950$',
        status: 'Вільно',
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
                            <div>${item.square}</div>
                        </div>
                        <div class="floor_option">
                            <div>Ціна за м²</div>
                            <div>${item.price}</div>
                        </div>
                        <div class="floor_option">
                            <div>Загальна вартість:</div>
                            <div>${item.priceTotal}</div>
                        </div>
                        <div class="floor_option">
                            <div>Статус:</div>
                            <div>${item.status}</div>
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
                    if (item.flatNumber === Number(thisFlat)) {
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
                flat.setAttribute('data-triger-modal', 'sold_flat')
            } else {
                flat.querySelector('.flat_status').innerHTML = `Вільно`
            } //Добавляем условие смены статуса при наличии определенного класса
        })
        
}

document.querySelector('.page-floor') ? installFloor() : null; //Включаем функцию только для page-floor