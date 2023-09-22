// 2. Importo il blocco di codice dell'array di oggetti (immagini, titolo e testo slider)
const arrayImgs = [

  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  
  {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  
  {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  
  {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },
  
  {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }

];

const itemsCollector = document.querySelector('.items-wrapper');

const imgBox = document.createElement('div')
imgBox.className = 'img-box';
itemsCollector.append(imgBox);

const thumbnail = document.querySelector('.thumbnail');

const btnPrev = document.querySelector('.up');
const btnNext = document.querySelector('.down');

let counterImg = 0;


// for (let i = 0; i < arrayImgs.length; i++) {

//   let image = arrayImgs[i];

//   itemsCollector.innerHTML += `<img src="${image}" class="item">`;
//   thumbnail.innerHTML += `<img src="${image}" class="item-thumb">`;
  
//   if (i === 0) document.querySelector('.item').classList.add('active');
//   if (i === 0) document.querySelector('.item-thumb').classList.add('active');

// };


arrayImgs.forEach((immagine)=>{

  imgBox.innerHTML += `

    <img src="${immagine.image}" class="item">

  
  `;

  thumbnail.innerHTML += `<img src="${immagine.image}" class="item-thumb">`;

  //Rendo la prima immagine attiva 
  if (arrayImgs[0]) document.querySelector('.item').classList.add('active');

  if (arrayImgs[0]) document.querySelector('.item-thumb').classList.add('active');
  
});

const carouselNext = setInterval(clickNext, 2500);


const images = document.getElementsByClassName('item');
const imagesThumbActive = document.getElementsByClassName('item-thumb');


btnNext.addEventListener('click', clickNext);

btnPrev.addEventListener('click', clickPrev);


function clickPrev() {

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

};

function clickNext() {

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

};