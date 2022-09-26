import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  divForInsert: document.querySelector(".gallery"),
};
const galleryForInsert = createImages(galleryItems);
refs.divForInsert.insertAdjacentHTML("beforeend", galleryForInsert);
function createImages(galleryItems) {
  return galleryItems
    .map((element) => {
      return `
        
          <a class="gallery__item" href="${element.original}">
            <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
            />
          </a>
          `;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox");
