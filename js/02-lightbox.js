import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  divForInsert: document.querySelector(".gallery"),
};
const galleryForInsert = createImages(galleryItems);

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

refs.divForInsert.insertAdjacentHTML("beforeend", galleryForInsert);
refs.divForInsert.addEventListener("click", onImageClick);

function onImageClick(event) {
  //   console.log(event);
  blocksStandartAction(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }
  let gallery = new SimpleLightbox(".gallery a");
  //     , {
  //     // captionSelector: `${event.target.alt}`,
  //     // captionType: `alt`,
  //     // captionsData: event.target.alt,
  //     // captionClass: event.target.alt,
  //   });

  gallery.on("show.simplelightbox");
  console.log(`от клика ${event.target.alt}`);
}

function blocksStandartAction(event) {
  event.preventDefault();
}
