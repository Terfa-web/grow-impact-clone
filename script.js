const cardParagraph = document.querySelector('.para-bold');

let text = cardParagraph.textContent.split(" ")
let header = document.querySelector('.card__header')



window.addEventListener('resize', function(event) {
  while(window.innerWidth >= '768px') {
    console.log('resize')
  }
    
})