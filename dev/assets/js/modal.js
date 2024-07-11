const modal = document.querySelector('.modal')
const trigger = document.querySelectorAll('[data-trigger-modal]')
const modalBody = document.querySelector('.modal_body')

const modalArr = [
    {
        id:'sold',
        title:'На жаль, всі квартири продано',
        description:'Ви можете обрати будь-який інший будинок із переліку і переглянути варіанти доступних квартир для бронювання',
    },
    {
        id:'sold_floor',
        title:'На поверсі не залишилося квартир',
        description:'На обраному поверсі не залишилося вільних квартир, але ви можете обрати квартиру із інших доступних поверхів будинку',
    },
    {
        id:'sold_flat',
        title:'Цю квартиру вже купили',
        description:'Обрана квартира більше не доступна, оберіть, будь ласка, інший варіант',
    },
    {
        id:'success_flat',
        title:'Сподобалася квартира?',
        description:'Заповніть форму і ми з вами звʼяжемося',
        markup: `<form>
                    <div class="input_row">
                        <label for="name">Імʼя</label>
                        <input type="text" id="name">
                    </div>
                    <div class="input_row">
                        <label for="email">Електронна пошта</label>
                        <input type="text" id="email">
                    </div>
                    <div class="input_row">
                        <label for="question">Коментар чи додаткова інформація</label>
                        <textarea type="text" id="question"></textarea>
                    </div>
                </form>
                <div class="btn_row">
                    <button type="submit" class="btn" data-modal="close">Готово</button>
                    <button class="btn_close" data-modal="close"></button>
                </div>`
    },
]

trigger.forEach (item => {
    item.addEventListener('click', function () {
        const modalType = item.getAttribute('data-trigger-modal')
        showModal (modalType)
    })
})

function showModal (modalType) {
    const modalData = modalArr.find(item => item.id === modalType)
    if (modalData) {
        renderModalContent (modalData)
        modal.classList.add('show')
    }
}

function renderModalContent (modalData) {
    if (modalData.markup) {
        modalBody.innerHTML = ` <h2>${modalData.title}</h2>
                                <p>${modalData.description}</p>
                                ${modalData.markup}`
    }
    else {
        modalBody.innerHTML = ` <h2>${modalData.title}</h2>
                                <p>${modalData.description}</p>
                                <div class="btn_row">
                                    <button class="btn" data-modal="close">Добре</button>
                                    <button class="btn_close" data-modal="close"></button>
                                </div>`

    }
    const modalClose = document.querySelectorAll("[data-modal='close']")

    modalClose.forEach(close => {
        close.addEventListener('click', closeModal)
    })
}

function closeModal () {
    modal.classList.remove('show')
}

modal.addEventListener('click', (event) => {
    event.target.classList.remove('show')
})