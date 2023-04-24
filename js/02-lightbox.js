import { galleryItems } from './gallery-items.js';
// Change code below this line
const addImagesEl = document.querySelector(".gallery");
const imgItems = galleryItems
  .map(
    ({ preview, original, description}) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
 )
    .join("");
addImagesEl.insertAdjacentHTML("beforeend", imgItems);
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});
console.log(galleryItems);

