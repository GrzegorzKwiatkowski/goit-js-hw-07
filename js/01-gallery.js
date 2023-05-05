import { galleryItems } from './gallery-items.js';
// Change code below this line
//const
const galleryEl = document.querySelector('.gallery')

//const
//dodawanie zdjęć do galerii
const galleryDiv = galleryItems.map(picture => `<a class=gallery__item href="${picture.original}"><img class=gallery__image src=${picture.preview} alt='${picture.description}'</img></a>`)
.join('')
galleryEl.insertAdjacentHTML('beforeend', galleryDiv)
galleryEl.classList.add()
//dodawanie zdjęć do galerii
//lisener do powiekszania zdjęć
galleryEl.addEventListener(click, openPicture => {
    openPicture.preventDefault();
    if (openPicture.target.nodeName !== 'IMG') {
		return
	}
});




console.log(galleryItems);
console.log(galleryEl);
console.log(galleryDiv)

