// const flatContainer = document.querySelector('.flat_container')
// const flattrigger = document.querySelectorAll('[data-trigger-flat-page]')
// const flatBody = document.querySelector('.flat_svg')

// const flatSvgArr = [
//     {
//         id:'flat_4',
//         markup:`<svg class="flat_img" viewBox="0 0 1731 612">
//                     <image xlink:href="assets/img/flat_4.png"/>
//                     <path class="flat_item" data-trigger-modal="success_flat" d="M536 322L536.5 106H757.5V61H881V503H758V322H536Z"/>
//                 </svg>`,
//     },
//     {
//         id: 'flat_5',
//         markup: `<svg class="flat_img" viewBox="0 0 1731 612">
//                     <image xlink:href="assets/img/flat_5.png"/>
//                     <path class="flat_item" data-trigger-modal="success_flat" d="M1195 322L1194.5 106H973.5V61H850V503H973V322H1195Z"/>
//                 </svg>`
//     },
// ]

 // Получаем параметры из URL
 const myUrl = new URLSearchParams(window.location.search);
 const flatNumber = myUrl.get('flatNumber');
 console.log(flatNumber);

//  Функция для отображения нужного контента
 function renderContent(flatNumber) {
     // Скрываем весь контент
     const contents = document.querySelectorAll('.content');
     contents.forEach(content => content.classList.remove('active'));

     // Отображаем контент в зависимости от flatNumber
     const selectedContent = document.getElementById(`flat-${flatNumber}`);
     if (selectedContent) {
         selectedContent.classList.add('active');
     } else {
         // Если flatNumber не соответствует ни одному элементу, можно отобразить сообщение об ошибке или другой контент
         console.error(`No content found for flat number: ${flatNumber}`);
     }
 }

//  function renderContent(flatNumber) {
//     const content = document.querySelectorAll('.content');
//     if (flatNumber === 4) {
//         content.innerHTML = `newHTML-flat-4` 
//     } else if (flatNumber === 5) {
//         content.innerHTML = `newHTML-flat5` 
 
//     }
//  }

 // Вызываем функцию рендеринга контента
 renderContent(flatNumber);






// flattrigger.forEach (item => {
//     item.addEventListener('click', function () {
//         const svgType = item.getAttribute('data-trigger-flat-page')
//         showFlat (svgType)
//     })
// })

// function showFlat (svgType) {
//     const flatData = flatSvgArr.find(item => item.id === svgType)
//     if (flatData) {
//         renderFlatContent (flatData)
//         // window.location.href = 'flat-item.html'
//         history.pushState({
//             source: 'web'
//         }, 'flat-item.html');
//     }
// }

// function renderFlatContent (flatData) {
//     if (flatData.markup) {
//         flatBody.innerHTML = `${flatData.markup}`
//     }
// }
