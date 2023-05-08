import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `;
    })
    .join("");
}
const cardsMarkup = createGallery(galleryItems);
galleryEl.innerHTML = cardsMarkup;

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});
