import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(item => `<li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    
  </a>
</li>`).join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryEl.addEventListener("click", onClickSelectImg);

function onClickSelectImg(evt) {
  evt.preventDefault();
  
if (evt.target.nodeName !== 'IMG') {
    return;
  };  
  const bigImgUrl = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src= ${bigImgUrl}>`
    , {
      onShow: () => {
        window.addEventListener('keydown', onKeydown);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydown);
      },
    },
  );
  instance.show();

  function onKeydown (evt) {
  if (evt.code === "Escape") {
    instance.close();
    }
  }
};
