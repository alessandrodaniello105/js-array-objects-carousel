const arrayImgs = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

const itemsCollector = document.querySelector('.items-wrapper');
const thumbnail = document.querySelector('.thumbnail');

const btnPrev = document.querySelector('.up');
const btnNext = document.querySelector('.down');

let counterImg = 0;


for (let i = 0; i < arrayImgs.length; i++) {

  let image = arrayImgs[i];

  itemsCollector.innerHTML += `<img src="${image}" class="item">`;
  thumbnail.innerHTML += `<img src="${image}" class="item-thumb">`;
  
  if (i === 0) document.querySelector('.item').classList.add('active');
  if (i === 0) document.querySelector('.item-thumb').classList.add('active');

};

const images = document.getElementsByClassName('item');
const imagesThumbActive = document.getElementsByClassName('item-thumb');


btnNext.addEventListener('click', function(){
  
  if (counterImg < (arrayImgs.length - 1)) {

    images[counterImg].classList.remove('active'); 
    imagesThumbActive[counterImg].classList.remove('active');
  
    counterImg++;
    
    images[counterImg].classList.add('active');
    imagesThumbActive[counterImg].classList.add('active');


  } else if (counterImg == (arrayImgs.length - 1)) {

    images[counterImg].classList.remove('active'); 
    imagesThumbActive[counterImg].classList.remove('active');

    counterImg = 0;

    images[counterImg].classList.add('active');
    imagesThumbActive[counterImg].classList.add('active');

  }

});


btnPrev.addEventListener('click', function(){

  if (counterImg > 0) {

    images[counterImg].classList.remove('active'); 
    imagesThumbActive[counterImg].classList.remove('active');


    counterImg--; //potevamo inserire l'if semplicemente dopo il counter, come verifica

    images[counterImg].classList.add('active');
    imagesThumbActive[counterImg].classList.add('active');


  } else if (counterImg == 0 ) {

    images[counterImg].classList.remove('active'); 
    imagesThumbActive[counterImg].classList.remove('active');


    counterImg = (arrayImgs.length - 1);

    images[counterImg].classList.add('active');
    imagesThumbActive[counterImg].classList.add('active');
    
  }
});
