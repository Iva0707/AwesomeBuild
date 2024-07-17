
const switchToFlat =()=> {

    let flatArr = JSON.parse(localStorage.getItem('flatArr'));
    
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