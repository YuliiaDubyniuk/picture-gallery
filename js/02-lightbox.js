import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(item => `<li class="gallery__item">
   <a class="gallery__link" href=${item.original}>
      <img class="gallery__image" src=${item.preview} alt=${item.description}/>
   </a>
</li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryEl.addEventListener("click", onClickShowSelectedImg);

function onClickShowSelectedImg(evt) {
    evt.preventDefault();

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
    });
}
