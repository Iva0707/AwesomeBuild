const modal = document.querySelector('.modal')
const triger = document.querySelectorAll('[data-triger-modal]')
const modalBody = document.querySelector('.modal_body')

const modalArr = [
    {
        id:'sold',
        title:'На жаль, всі квартири продано',
        description:'Ви можете обрати будь-який інший будинок із переліку і переглянути варіанти доступних квартир для бронювання',
    },
    {
        id:'loginSuccess',
        title:'Вхід успішно виконано',
        description:'Ви успішно увійшли до системи. Ласкаво просимо!',
    },
    {
        id:'question',
        title:'Залишилися питання?',
        description:'Заповніть форму та задайте ваші питання',
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
                        <label for="question">Ваше питання</label>
                        <textarea type="text" id="question"></textarea>
                    </div>
                </form>
                <div class="btn_row">
                    <button type="submit" class="btn" data-modal="close">Готово</button>
                    <button class="btn_close" data-modal="close"></button>
                </div>`
    },
    {
        id:'error',
        title:'Щось пішло не так',
        description:'На жаль, щось пішло не так, спробуйте, будь ласка, пізніше',
    },
]

triger.forEach (item => {
    item.addEventListener('click', function () {
        const modalType = item.getAttribute('data-triger-modal')
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
    console.log(modalClose);

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