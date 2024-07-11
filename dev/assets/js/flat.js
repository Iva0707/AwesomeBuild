const flatContainer = document.querySelector('.flat_container')
const flattrigger = document.querySelectorAll('[data-trigger-flat-page]')
const flatBody = document.querySelector('.flat_svg')

const flatSvgArr = [
    {
        id:'flat_4',
        markup:`<svg class="flat_img" viewBox="0 0 1731 612">
                    <image xlink:href="assets/img/flat_4.png"/>
                    <path class="flat_item" data-trigger-modal="success_flat" d="M536 322L536.5 106H757.5V61H881V503H758V322H536Z"/>
                </svg>`,
    },
    {
        id: 'flat_5',
        markup: `<svg class="flat_img" viewBox="0 0 1731 612">
                    <image xlink:href="assets/img/flat_5.png"/>
                    <path class="flat_item" data-trigger-modal="success_flat" d="M1195 322L1194.5 106H973.5V61H850V503H973V322H1195Z"/>
                </svg>`
    },
]

flattrigger.forEach (item => {
    item.addEventListener('click', function () {
        const svgType = item.getAttribute('data-trigger-flat-page')
        showFlat (svgType)
    })
})

function showFlat (svgType) {
    const flatData = flatSvgArr.find(item => item.id === svgType)
    if (flatData) {
        renderFlatContent (flatData)
        // window.location.href = 'flat-item.html'
        history.pushState({
            source: 'web'
        }, 'flat-item.html');
    }
}

function renderFlatContent (flatData) {
    if (flatData.markup) {
        flatBody.innerHTML = `${flatData.markup}`
    }
}