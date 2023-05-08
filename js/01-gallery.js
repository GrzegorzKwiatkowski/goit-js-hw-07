import { galleryItems } from "./gallery-items.js";

// Change code below this line
//const
const galleryEl = document.querySelector(".gallery");

//const
//dodawanie zdjęć do galerii
function createGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
    `;
    })
    .join("");
}
const cardsMarkup = createGallery(galleryItems);
galleryEl.innerHTML = cardsMarkup;
//dodawanie zdjęć do galerii
//EventListener + Modal
galleryEl.addEventListener("click", openPicture);

function openPicture(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const openModal = () => {
    const originalImg = event.target.dataset.source;

    const instance = basicLightbox.create(
      `
      <img src="${originalImg}">
      `,
      {
        onShow: (instance) => {
          window.addEventListener("keydown", openModalbyEsc);
        },

        onClose: (instance) => {
          window.removeEventListener("keydown", openModalbyEsc);
        },
      }
    );

    const openModalbyEsc = (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    };

    instance.show();
  };

  openModal();
}
//EventListener + Modal
console.log(galleryItems);
console.log(galleryEl);
